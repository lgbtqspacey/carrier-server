FROM node:20-alpine
WORKDIR /

COPY package*.json ./
RUN npm i -g typescript tsconfig-paths && npm ci --ignore-scripts
COPY . .

RUN npm run build && npm run sentry:sourcemaps

EXPOSE 8080
CMD [ "npm", "start" ]
