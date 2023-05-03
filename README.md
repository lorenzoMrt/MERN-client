# About

This project is a full-stack web application built using React, TypeScript, TailwindCSS, React Query, Express, MongoDB, and Docker. It provides a web interface for users to view and manage their customers.

## Features
- View customers
- Add new customer

## Technologies Used
**Frontend**
- React: A JavaScript library for building user interfaces
- Create React App: A tool for creating React applications with no build configuration
- TypeScript: A superset of JavaScript that adds optional static typing
- TailwindCSS: A utility-first CSS framework for rapid UI development
- React Query: A library for managing and caching server state in React applications
- Avataaars: A library for generating avatars

**Backend**
- Express: A fast, unopinionated, minimalist web framework for Node.js
- Express TS Code Generator: A tool to generate TypeScript code for Express applications
- MongoDB: A NoSQL document database that stores data in JSON-like documents
- Docker: A platform for building, shipping, and running distributed applications

**Database**
- MongoDB Docker Image: A pre-built Docker image for running MongoDB

**Deployment**
- AWS EC2: A scalable virtual machine service for deploying backend and database

**Installation**
1. Clone the repository
2. Install dependencies by running npm install in both the frontend and backend directories
3. Start the development server by running ``yarn start`` in the frontend

**Deployment**
1. Build the frontend by running npm run build in the frontend directory
2. Create a Docker image for the backend by running docker build -t <image-name> . in the backend directory
3. Push the Docker image to a container registry (e.g. Docker Hub, Amazon ECR)
4. Launch an AWS EC2 instance and install Docker
5. Pull the Docker image and run the container on the EC2 instance


# Getting started
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
