FROM node:alpine as dev
WORKDIR /root
CMD echo "getting latest npm modules" \
    && npm install \
    && echo "installation complete, starting" \
    && npm run dev

FROM node:alpine as build
WORKDIR /root
COPY ./package.json ./package.json
RUN npm install
COPY . .
RUN npm run build \
    && npm run export

FROM nginx:alpine as prod
COPY --from=build /root/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000