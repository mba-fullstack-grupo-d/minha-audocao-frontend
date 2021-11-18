FROM node:14.5.0 as build-deps
WORKDIR /usr/src/app
RUN yarn global add serve
ADD build ./
ENTRYPOINT ["serve","-p","80","-s","."]