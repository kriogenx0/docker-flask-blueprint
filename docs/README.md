# Docker Flask Blueprint

docker-flask-blueprint is a blueprint template to be used to bootstrap new flask applications in flask.

A single Dockerfile will build a flask application using Nginx and either Gunicorn or uWSGI.

### Build Docker Image

This creates the image with the name `flaskapp`.

```
docker build -t flaskapp .
```

### Boot Docker Container

Once we've created an image, we need to create a container, which is a running snapshot of an image.

```
docker run -t -p 4000:80 flaskapp
```

You can provide the `-d` switch to run in background. This will return the container id.

### Ensure Server is Running

```
docker ps
```

Visit [http://localhost:4000/](http://localhost:4000/)

### Debugging

If the server is not running, run to debug:

```
docker logs [container_id]
```

You can also run Docker events in a separate terminal, this will log all events such as running a container:

```
docker events
```

### Shelling In

```
docker exec -it [container_id] bash
```

---

### Useful Docker Commands

`docker image ls` — list available images
`docker container ls` — list all containers
`docker logs [container id]` — tail logs from a container
`docker kill [container id]` — kill execution of a container
`docker restart [container id]` — restart container
`docker start [container id]` — start stopped container
`docker stop [container id]` — gracefully end container
`docker container prune` — delete all non-running containers
