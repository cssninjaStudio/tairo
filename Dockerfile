FROM bitnami/node:22.14.0 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS install
COPY . /build
WORKDIR /build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM install AS build-demo
RUN --mount=type=cache,id=pnpm,target=/pnpm/store NODE_OPTIONS=--max-old-space-size=6144 pnpm run --filter @cssninja/tairo-component-meta prepack
RUN --mount=type=cache,id=pnpm,target=/pnpm/store NODE_OPTIONS=--max-old-space-size=6144 pnpm run --filter demo build

FROM base AS demo
ENV NODE_ENV=production
RUN groupadd -g 10101 nuxt \
   && useradd -u 11001 -g nuxt nuxt \
   && chown -R nuxt:nuxt /app
USER nuxt:nuxt
COPY --chown=nuxt:nuxt --from=build-demo /build/.demo/.output /prod/demo/.output
WORKDIR /prod/demo
EXPOSE 3000
CMD ["node",  ".output/server/index.mjs"]
