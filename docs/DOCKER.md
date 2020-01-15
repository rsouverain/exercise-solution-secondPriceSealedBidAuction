# SPSBAR - Docker

> For Windows user, you may want to append `winpty` to some of your commands 

## Requirements

* Docker Engine [installed](https://docs.docker.com/install/) >= 18.06.0
* Docker Compose [installed](https://docs.docker.com/compose/install/) >= 1.24.1 (optional if you proceed to build and run the stack manually)
* A live internet connection for the first up/run/build of the stack.

## NodeJS CLI container

From `<projectDir>/docker`

##### Start:
```shell script
docker-compose up
```
You can add the `-d` option to start in detached mode

##### Execute commands:

Enter in interactive mode:
```shell script
docker exec -ti rsouverain_cli sh
```

Run commands from the host machine:
```shell script
docker exec -ti rsouverain_cli sh -c "echo IT WORKS"
```

##### Stop:
```shell script
docker-compose down
```

##### Rebuild (optional):
```shell script
docker-compose build
```
