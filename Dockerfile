FROM node:14.15.1 as build

#ENV NODE_ENV=production
WORKDIR /app
#COPY ["package.json", "package-lock.json", "index.js", "application.js", "./"]
COPY . .
RUN npm install

FROM node:14.15.1-alpine

COPY --from=build /app /
EXPOSE 3000
CMD ["npm", "start"]
