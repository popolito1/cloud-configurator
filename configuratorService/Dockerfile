# syntax=docker/dockerfile:1
#node v16.14.1

FROM node:16-alpine
ENV ORIGIN "http://localhost:8080"
ENV PORT 8081
WORKDIR /configuratorService
COPY . .
RUN npm install && npm run build 
EXPOSE 81
CMD npm run start