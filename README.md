# Gamehub Frontend

Hi bros! The frontend is building with Nextjs. Let enjoy it! Don't eat it :))

##  Break it with Docker base

### Usage

- One more time, don't eat that! for sure, lmaooo
- This one aims to make a product ready Nextjs image, which can be deployed anywhere, from on-premise server to K8S, Cloud...

### Prerequisite

- Docker is already installed on your device.
- Docker-compose is for sure guy.

### How to use?

- Checkout the docker-compose.yml. I'm convinced bro get it in second!.
- Create a new file .env. Look at it bro!


```
BASE_URL = https://beta.gamehub.io/api/
IMAGE_URL = https://beta.gamehub.io
IFRAME_URL = https://beta.gamehub.io/
SOCKET=https://beta.gamehub.io
ALGOLIA_PROVIDER_APPLICATION_ID=xxxxx
ALGOLIA_PROVIDER_ADMIN_API_KEY=xxxx
DEVELOPMENT_API=xxxx
```

Heads-up:
- Kindly to change Algolia info.
- Host configuration.


### How to run?

```
docker-compose up
```

Checkout via `http://localhost:3000`. 