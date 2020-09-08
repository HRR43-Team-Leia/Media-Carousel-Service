# specify the node base image
FROM node:12

# Create app directory
WORKDIR /Users/yerxiong/code/yer-space/HRR43/team-leia/Media-Carousel-Service

# install app dependencies
COPY package*.json ./

RUN npm install

# to bundle app source code
COPY . .

# your app binds to port 8080
EXPOSE 8080

CMD ["node", "server/index.js"]




