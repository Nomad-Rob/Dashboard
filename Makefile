# Makefile for Docker

# Variables
DOCKER_IMAGE_NAME = dashboard
DOCKER_CONTAINER_NAME = dashboard_container
HOST_DIRECTORY=./
CONTAINER_DIRECTORY=/dashboard
.PHONY: build run exec stop clean

# Build the Docker image
build:
	docker build -t $(DOCKER_IMAGE_NAME) .

# Run the Docker container with directory binding
run:
	docker run -d --name $(DOCKER_CONTAINER_NAME) -p 2022:22 -p 8080:8080 -p 9000:9000 -p 4000:4000 -p 3001:3001 -p 9001:9001 -p 3000:3000 -p 6379:6379 -p 9002:9002 -v ${HOST_DIRECTORY}:${CONTAINER_DIRECTORY} ${DOCKER_IMAGE_NAME}

# Execute a command inside the Docker container
exec:
	docker exec -it $(DOCKER_CONTAINER_NAME) bash

# Stop and remove the Docker container
stop:
	docker stop $(DOCKER_CONTAINER_NAME)
	docker rm $(DOCKER_CONTAINER_NAME)

# Clean up Docker images and containers
clean:
	docker stop $(DOCKER_CONTAINER_NAME) || true
	docker rm $(DOCKER_CONTAINER_NAME) || true
	docker rmi $(DOCKER_IMAGE_NAME) || true
