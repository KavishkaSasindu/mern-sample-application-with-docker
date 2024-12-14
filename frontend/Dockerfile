#import base image
FROM node:22-alpine

#create working directory
WORKDIR /app

#copy package files
COPY package*.json ./

#install dependencies
RUN npm install

#copy source files
COPY . .

#command to run
CMD [ "npm","run","dev" ]