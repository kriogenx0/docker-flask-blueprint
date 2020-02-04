FROM ubuntu:18.10
LABEL maintainer="Alex Vaos <simplex0@gmail.com>"

# Install updates and python
RUN apt-get update
# For debugging
RUN apt-get install -y vim
RUN apt-get install -y nginx
RUN apt-get install -y python3 python3-dev python3-pip

# Configure Nginx -------------

# Remove the default nginx.conf
# RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/sites-available/default
RUN rm /etc/nginx/sites-enabled/default

# Replace with our own nginx.conf
# COPY server/nginx.conf /etc/nginx/conf.d/
COPY server/nginx-site.conf /etc/nginx/sites-enabled/blueprint

# Forward request logs to Docker log collector
# RUN ln -sf /dev/stdout /var/log/nginx/access.log \
#   && ln -sf /dev/stderr /var/log/nginx/error.log

# Configure Flask -------------
RUN pip3 install uwsgi

# Set Directory
COPY . /var/www/blueprint
WORKDIR /var/www/blueprint

# Install dependencies
RUN pip3 install -r requirements.txt

# Configure web user
# ENV GROUP_ID=1000 USER_ID=1000
# RUN addgroup -g $GROUP_ID www
# RUN adduser -D -u $USER_ID -G www www -s /bin/sh
# USER www

# ENTRYPOINT [ "python" ]

# Run Server

# Nginx
EXPOSE 80

# Run
CMD nginx && \
  # FLASK_ENV=development flask run --port 8080
  uwsgi server/uwsgi.ini

# CMD ["uwsgi", "app.ini"]
# CMD uwsgi -s /tmp/uwsgi.sock --chmod-socket=666 --manage-script-name --mount /=app:app

# EXPOSE 5000
# CMD [ "gunicorn", "-w", "4", "--bind", "0.0.0.0:5000", "run"]

# CMD ["nginx", "-g", "daemon off;"]
