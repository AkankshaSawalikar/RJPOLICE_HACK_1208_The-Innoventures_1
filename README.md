## Police Feedback System

## Overview

The Police Feedback System is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to encourage open communication, respect privacy, and allow a broader representation of community voices to contribute to improving policing practices.
We are taking feedback from users and classifying that data by using Machine Learning model as as per that we are creating results (which we will show by Pictorial representation) and that result would be analyzed and seen by the respective near by police departments(near by  police departments).

## Description

- This React application is built using [create-react-app](https://create-react-app.dev/).
- It uses [Tailwind CSS](https://tailwindcss.com/)
- The application is generated in JavaScript.

## Pre-requisites
Before running the application, make sure you have the following installed:
- MongoDB
- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v16 or greater
- [npm](https://www.npmjs.com/) - v6 or greater

## Features

- **Home Page:** Provides an introduction to the Police Feedback System.
- **Feedback Form Page:** Allows users to submit feedback about policing practices.
- **Login Page:** Facilitates user authentication.


## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **User Authentication:** JSON Web Tokens (JWT)
- **Machine Learning Model:** Classification Model

  
## Steps for Installation :
step 1 :git clone https://github.com/AkankshaSawalikar/RJPOLICE_HACK_1208_The-Innoventures_1.git

step 2: Move into your repository
cd RJPOLICE_HACK_1208_The-Innoventures_1

Step 3: To install the dependencies use:
npm install

Step 4: Run the project
npm start


## Running in dev environment

1.  `cd YOUR_APPLICATION`
2.  `npm install`
3.  `npm start`

## .env file

This file contains various environment variables that you can configure.




  
## Folder Structure

```
 .
 ├── package.json
 ├── postcss.config.js
 ├── public
 │   ├── assets
 │   │   └── images --------- All Project Images
 │   ├── favicon.ico
 │   ├── index.html
 │   ├── manifest.json
 │   └── robots.txt
 ├── README.md
 ├── src
 │   ├── App.jsx
 │   ├── assets
 │   │   └── fonts ---------- Project fonts
 │   ├── components --------- UI and Detected Common Components
 │   ├── constants ---------- Project constants, eg: string consts
 │   ├── hooks -------------- Helpful Hooks
 │   ├── index.jsx
 │   ├── pages -------------- All route pages
 │   ├── Routes.jsx ---------- Routing
 │   ├── styles
 │   │   ├── index.css ------ Other Global Styles
 │   │   └── tailwind.css --- Default Tailwind modules
 │   └── util
 │       └── index.jsx ------- Helpful utils
 └── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.jsx` is the JavaScript entry point.

You may create subdirectories inside src.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.

## Installing a Dependency

You can install any dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router
```

Alternatively you may use `yarn`:

```sh
yarn add react-router
```

## License

MIT License

Copyright (c) 2023 DhiWise

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

