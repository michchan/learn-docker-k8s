# Specify base image
# Reference: https://hub.docker.com/_/node

# An image with repo name "node" with tag "12-alpine"
# An it is for node version 12.
FROM node:12-alpine

# Specify working directory in the container file system
# P.S.: /usr folder is safe but that's to your decision
WORKDIR /usr/app
# Copy package.json
# If package.json is not changed, the following npm install won't run.
COPY ./package.json ./
# Install dependencies
RUN npm install
# Copy all files from the current working directory
COPY ./ ./

# Default command
CMD ["npm", "start"]