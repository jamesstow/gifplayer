FROM node:18-alpine as build
WORKDIR /app

COPY ./src/package.json /app
RUN npm install

COPY ./src/ /app/

RUN npm run build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html