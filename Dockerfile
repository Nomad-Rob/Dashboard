FROM ubuntu:18.04

RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    vim \
    emacs \
    locales \
    build-essential
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8
RUN curl -sl https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get update && apt-get install -y nodejs


# Create test user
RUN useradd -M correction_tester

# Keep the container running indef 
CMD ["tail", "-f", "/dev/null"]
