FROM node:18-alpine
EXPOSE 3000
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["sh", "-c", "npm run build:css && npm run start:dev"]
