# Base on offical Node.js Alpine image
FROM node:12-alpine

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged

COPY ./package.json ./
COPY ./yarn.lock ./

# Copy .npmrc file that configures the @fortawesome scope to use the FontAwesome Pro NPM registry
COPY ./.npmrc ./

# Install dependencies
RUN yarn

# Copy all files
COPY ./ ./

# Build app
RUN yarn build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
# USER node

CMD [ "yarn", "start" ]