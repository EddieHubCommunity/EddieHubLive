FROM node:16-alpine as development
LABEL org.opencontainers.image.source https://github.com/eddiehubcommunity/live

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --ignore-scripts
COPY . .

RUN sed -i 's/0.0.0/'`npm -s run env echo '$npm_package_version'`'/g' public/app.json
RUN npm run build

FROM node:16-alpine as production
LABEL org.opencontainers.image.source https://github.com/eddiehubcommunity/live

ARG NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["npm", "run", "start:prod"]
