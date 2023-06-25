###################
# BUILD FOR LOCAL DEVELOPMENT
###################
# In this step we copy over everything we need and install all dependancies
# We stop at the end of this step in development, so it also includes the deploy command
# We install jest, eslint and ts-node so we can run tests and lint.

FROM node:20.2 As development

ENV TZ="America/Chicago"
ENV NODE_ENV=development
RUN date

# Create app directory
WORKDIR /usr/src/app

# For the oracle server?
# RUN apk add --update python3 make g++\
#    && rm -rf /var/cache/apk/*

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./

# Install app dependencies using the `npm ci` command instead of `npm install`
# Use NPM CI even though this may be your first time, cuz package-lock already thinks you installed stuff
RUN npm ci

# Bundle app source
COPY --chown=node:node . .

# Generate the prisma client
RUN npx prisma generate

# Copy git folder
# This doesnt work when you download the image
# COPY .git/ ./.git/

# RUN apt-get -y update
# RUN apt-get -y install git

# Get the git repo for development
RUN git clone https://github.com/TripSit/database-admin --bare

# For container development, the following command runs forever, so we can inspect the container
CMD tail -f /dev/null

###################
# BUILD FOR PRODUCTION
###################
# This stage prepares for and builds the production .js code
# We copy over the node_modules directory from the development image to ensure that the production image has access to all the dependencies it needs
# Then we copy over everything else that may be needed to run
# We run the build command which creates the production bundle
# We run npm ci --only=production to ensure that only the production dependencies are installed

FROM node:20.2-alpine As build

ENV TZ="America/Chicago"
ENV NODE_ENV=production
RUN date

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

# In order to run `npm run build` we need access to the Nest CLI which is a dev dependency. In the previous development stage we ran `npm ci` which installed all dependencies, so we can copy over the node_modules directory from the development image
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

# Run the build command which creates the production bundle
# This comes before the next command cuz ts is a dev requirement and we don't want it in the production image
RUN npm install -g --save-dev typescript
RUN tsc

# Running `npm ci` removes the existing node_modules directory and passing in --only=production ensures that only the production dependencies are installed. This ensures that the node_modules directory is as optimized as possible
RUN npm ci --only=production && npm cache clean --force
# This is necessary to run canvas in the docker container
RUN npm install @napi-rs/canvas-linux-x64-musl

# USER node

# For container development, the following command runs forever, so we can inspect the container
# CMD tail -f /dev/null

###################
# PRODUCTION
###################
# This stage creates the final, small-as-can-be, production image
# We copy over the node_modules directory from the build stage
# Then we ONLY copy over the /build folder with the js files
# We already deployed before, so the only thing left to do is run the bot with PM2

FROM node:20.2-alpine As production

ENV TZ="America/Chicago"
ENV NODE_ENV=production
RUN date

WORKDIR /usr/src/app

# # Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/build ./build

# Install pm2
RUN npm install pm2 -g

USER node

# Start the bot using the production build
CMD ["pm2-runtime", "build/start.js"]
