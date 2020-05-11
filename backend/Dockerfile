FROM node:12.11.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn install

# If you are building your code for production
# RUN yarn install --production=true

# Bundle app source
COPY . /usr/src/app

EXPOSE 3001

RUN yarn setup

CMD yarn start