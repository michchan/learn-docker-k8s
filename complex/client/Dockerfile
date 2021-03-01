FROM node:12-alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# /app/build <-- all the stuff we care about
FROM nginx
# AWS ElasticBeanstalk will look at this port
EXPOSE 80
# Copy from the "first stage"
COPY --from=0 /app/build /usr/share/nginx/html