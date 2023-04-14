FROM bitnami/node:18
WORKDIR /app

RUN groupadd -g 10101 nuxt && \
   useradd -u 11001 -g nuxt nuxt \
   && chown -R nuxt:nuxt /app

USER nuxt:nuxt

COPY --chown=nuxt:nuxt .output .output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
