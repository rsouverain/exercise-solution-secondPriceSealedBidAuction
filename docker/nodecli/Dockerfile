FROM node:10-alpine

RUN apk update && \
    apk upgrade && \
    apk add git

COPY entrypoint.sh /entrypoint.sh
RUN chmod 755 /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

WORKDIR /project

# Configure timezone
ARG DOCKER_TIMEZONE=UTC
RUN echo $DOCKER_TIMEZONE > /etc/timezone;
