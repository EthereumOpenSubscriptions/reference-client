#!/bin/bash
## ---- No Network means use local ganache-cli
docker run -ti --rm --name metatxrelay -p 3000:3000 -p 8545:8545 -v ${PWD}/../backend:/backend metatxrelay
