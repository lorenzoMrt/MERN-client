FROM node:16-alpine
# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install Dependencies
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --immutable

# Copy app source code
COPY . .

RUN yarn build
# Exports
EXPOSE 3000


CMD ["npm","run", "dev"]