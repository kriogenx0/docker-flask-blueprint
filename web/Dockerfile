FROM ubuntu:18.10
LABEL maintainer="Alex Vaos <simplex0@gmail.com>"

# Install updates and python
RUN apt-get update
# For debugging
RUN apt-get install -y vim
RUN apt-get install -y nginx
RUN apt-get install -y python3 python3-dev python3-pip

# Configure Flask -------------
RUN pip3 install uwsgi

# Set Directory
COPY . /var/www/blueprint
WORKDIR /var/www/blueprint

# Install dependencies
RUN pip3 install -r requirements.txt

# Uwsgi
EXPOSE 5000

# Run
CMD uwsgi server/uwsgi.ini
# CMD FLASK_ENV=development flask run --port 8080

# CMD ["uwsgi", "app.ini"]
# CMD uwsgi -s /tmp/uwsgi.sock --chmod-socket=666 --manage-script-name --mount /=app:app

# EXPOSE 5000
# CMD [ "gunicorn", "-w", "4", "--bind", "0.0.0.0:5000", "run"]
