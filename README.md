# MERN: Book Search Engine
[![License: MIT](https://img.shields.io/badge/license-mit-green?style=for-the-badge&labelColor=black)](https://github.com/apri1mayrain/book-search-engine?tab=MIT-1-ov-file)
[![MongoDB](https://img.shields.io/badge/mongodb-white?style=for-the-badge&logo=mongodb&logoColor=%2347A248)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![React](https://img.shields.io/badge/react-white?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/node.js-white?style=for-the-badge&logo=nodedotjs&logoColor=%235FA04E)](https://nodejs.org/en)

## Table of Contents
- [Description](#description)
- [Deployment](#deployment)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)

## Description

This application is a fully functioning Google Books API search engine built with a RESTful API, which has been **refactored** into a GraphQL API built with Apollo Server and Client. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API.

### Code Refactor Tasks:

- Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
- Modify the existing authentication middleware so that it works in the context of a GraphQL API.
- Create an Apollo Provider so that requests can communicate with an Apollo Server.
- Deploy application to Render with a MongoDB database using MongoDB Atlas.

## Deployment

Please visit the deployed app here: [https://book-search-engine-2ue6.onrender.com/](https://book-search-engine-2ue6.onrender.com/)

## Installation

### Software Prerequisites:

- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)

### Installation Instructions:

1. Download repo files by [cloning the repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository) or [downloading the ZIP folder](https://github.com/apri1mayrain/book-search-engine/archive/refs/heads/main.zip). If downloading ZIP folder, please be sure to extract the folder.
2. Open your preferred source-code editor and open the file directory containing the repo.
3. Install the NPMs with command: `npm install`
4. To develop, run command: `npm run develop` or to build for production, run command: `npm run build && npm start`
- **Note:** to view production build instead of Apollo Sandbox... 
    1. Create `.env` file in root directory
    2. Copy and paste line into file: `NODE_ENV='production'`
    3. In `server/server.js` copy and paste on line 1: `require('dotenv').config()`

## Screenshots

The following animation demonstrates the application functionality:

![Demonstration of Book Search Engine app being used in the browser](./assets/images/demo.gif)

## Credits

* Starter code can be found here: [https://github.com/coding-boot-camp/solid-broccoli](https://github.com/coding-boot-camp/solid-broccoli)
* Researched [Apollo GraphQL docs](https://www.apollographql.com/docs/), [Stack Overflow forums](https://stackoverflow.com/), and other coding resources.

## License

[MIT License](https://github.com/apri1mayrain/book-search-engine?tab=MIT-1-ov-file) - Copyright © 2024 apri1mayrain

[(Go back to top)](#mern-book-search-engine)