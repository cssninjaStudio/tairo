FROM node:24.5.0-alpine3.22 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.14.0 --activate

FROM base AS install
COPY . /build
WORKDIR /build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM install AS build-demo
RUN --mount=type=cache,id=pnpm,target=/pnpm/store NODE_OPTIONS=--max-old-space-size=6144 pnpm run --filter @cssninja/tairo-component-meta prepack
RUN --mount=type=cache,id=pnpm,target=/pnpm/store NODE_OPTIONS=--max-old-space-size=6144 pnpm run --filter demo build

FROM base AS demo
ENV NODE_ENV=production
USER node:node
COPY --chown=node:node --from=build-demo /build/.demo/.output /prod/demo/.output
WORKDIR /prod/demo
EXPOSE 3000
CMD ["node",  ".output/server/index.mjs"]
