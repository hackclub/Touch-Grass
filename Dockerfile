FROM oven/bun:1-alpine AS build

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

ARG PASSPHRASE
ARG airtableAPIKey
ARG runnerSecret
ENV PASSPHRASE=$PASSPHRASE
ENV airtableAPIKey=$airtableAPIKey
ENV runnerSecret=$runnerSecret

RUN bun run build

FROM oven/bun:1-alpine

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

CMD ["bun", "run", "build/index.js"]
