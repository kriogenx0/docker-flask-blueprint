FROM ubuntu:18.10
LABEL maintainer="Alex Vaos <simplex0@gmail.com>"

# Install updates and python
RUN apt-get update
RUN apt-get install -y python3 python3-dev python3-pip nginx
RUN pip3 install uwsgi

# Configure Nginx
COPY ./deployment/nginx-site.conf /etc/nginx/sites-enabled/default

# Set Directory
COPY ./web /var/www/flaskapp
WORKDIR /var/www/flaskapp

# Install dependencies
RUN pip3 install -r requirements.txt

# Start Nginx
RUN nginx -t
CMD service nginx start
CMD uwsgi -s /tmp/uwsgi.sock --chmod-socket=666 --manage-script-name --mount /=app:app
