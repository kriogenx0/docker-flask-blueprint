FROM ubuntu:18.04
LABEL maintainer="Alex Vaos <simplex0@gmail.com>"

# Install updates and python
RUN apt-get update
# For debugging
RUN apt-get install -y vim
# Install nginx
RUN apt-get install -y nginx
RUN apt-get install -y nodejs npm

# Configure Nginx -------------

# Remove the default nginx.conf
# RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/sites-available/default
RUN rm /etc/nginx/sites-enabled/default

# Replace with our own nginx.conf
# COPY server/nginx.conf /etc/nginx/nginx.conf
COPY server/nginx-site.conf /etc/nginx/sites-enabled/site.conf

# Install Node dependencies
# COPY package.json /var/www/blueprint/
# RUN npm install

# Set Directory
COPY . /var/www/blueprint
WORKDIR /var/www/blueprint

RUN npm install
RUN npm rebuild node-sass
RUN npm run prod

# Nginx
EXPOSE 3000

# Run
# CMD nginx

# Run in foreground
CMD ["nginx", "-g", "daemon off;"]
