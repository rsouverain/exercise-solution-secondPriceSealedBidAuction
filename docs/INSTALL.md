# SPSBAR - Install

It is recommended to use the provided docker stack (read below), but technically, if you got a running version of [NodeJS](https://nodejs.org/en/download/) 10.x and a compatible [NPM](https://www.npmjs.com/get-npm) installed on your machine you may skip the install section.

For the others, you can use `nvm` or the provided docker stack.

#### if using Docker (recommended)...

The general idea is to use the container `rsouverain_cli` as a test and development platform instead of your host machine directly.

Head over to [DOCKER.md](./DOCKER.md).

#### if using NVM...

Make sure to have [installed NVM](https://github.com/nvm-sh/nvm#installation-and-update)

Then, tell it to download and use node 10.x:
```shell script
nvm install 10
nvm use 10
```

#### finally ...

This exercise is probably submitted in a .zip file with pre installed `node_modules/`

In case you feel the need to do it yourself, run from the project's root directory:
 
```shell script
npm install
 ```

The following commands may be useful to run before installing, specially if you are not using the docker stack and run into some troubles.
```shell script
rm -Rf node_modules/
rm package-lock.json
 ```

> NOTE: This page feels cumbersome and may be improved. (TODO)
