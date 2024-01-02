FROM node:20 AS builder

WORKDIR /build
ENV NEXT_TELEMETRY_DISABLED=1

COPY . .
RUN npm ci && npm run build

FROM node:20-slim

USER node
WORKDIR /runtime
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000
EXPOSE 3000

COPY --chown=node:node --from=builder /build/.next/standalone ./
COPY --chown=node:node --from=builder /build/.next/static ./.next/static

CMD ["node", "server.js"]
