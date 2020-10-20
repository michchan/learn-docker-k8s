# Use an existing docker image as a base
# "alpine" is the base OS (Linux)
# Why use alpine ? Because it has built-in `apk` (Apache Package) CLI
FROM alpine

# Download and install dependencies
# apk: Apache package
RUN apk add --update redis
RUN apk add --update gcc

# Tell the image what to do when it starts as a container
CMD ["redis-server"]