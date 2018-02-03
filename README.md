# martinsg.info (martins-giberts.github.io)
My contact information page and FE playground

# Prerequisites
- [git](https://git-scm.com/)
- [node](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/lang/en/)

# How to start
## Clone
- Clone `git clone https://github.com/martins-giberts/martins-giberts.github.io.git`

## Local machine
- open project directory in CMD
- `Yarn`
- `Yarn start`
- Open `localhost:8080`

## Docker
- open project directory in CMD
- `docker-compose up`
- Open `localhost:8080`

# Build static html (For Git pages)
- `Yarn build:prod` - run jest for changed files based on git and make production build
- `Yarn build:dev` - run jest for changed files based on git make development build

# Other scripts
- `Yarn coverage` - show Jest tests coverage on projects ./App folder
- `Yarn eslint` - run linter
- `Yarn start:prod` - start webpack dev server with production settings
- `Yarn test:all:dev` - run webpack config validator, eslint and jest for all tests in development environment
- `Yarn test:all:prod` - run webpack config validator, eslint and jest for all tests in production environment
- `Yarn test` - run jest for only changed files based on git
- `Yarn validate-webpack:dev` - validate webpack config in development environment
- `Yarn validate-webpack:prod` - validate webpack config in production environment
