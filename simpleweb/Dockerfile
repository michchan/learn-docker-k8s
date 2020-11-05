# Specify base image
# Reference: https://hub.docker.com/_/node

# An image with repo name "node" with tag "12-alpine"
# An it is for node version 12.
FROM node:12-alpine

# Copy all files from the current working directory
COPY ./ ./
# Install dependencies
RUN npm install

# Default command
CMD ["npm", "start"]