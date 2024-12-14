#import base image
FROM node:22-alpine

#create working direvtory
WORKDIR /app

#copy package files to install dependencies
COPY package*.json ./

#install dependencies
RUN npm install

#copy project files to working direvtory
COPY . .

#expose the port number
EXPOSE 5000

#command to run 
CMD [ "npm","start" ]