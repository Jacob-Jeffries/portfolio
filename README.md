# Personal Portfolio - In ReactJS

## Description 
This is a dynamic page generated using HTML, CSS, JavaScript, and ReactJS. Unlike the earlier portfolio page I created, this one renders different content on the page without reloading and has a Reactjs form with email validation. 

## Installation
This is a delpoyed site and does not require installation. However if you'd like to clone this repository and deploy it locally you can follow these steps:

Prior to installion you need to have these three NPM packages installed globally:
*   PM2 - https://pm2.keymetrics.io/docs/usage/quick-start/
*   Serve - https://www.npmjs.com/package/serve?activeTab=dependents
*   Concurrently - https://www.npmjs.com/package/concurrently

1. Clone the repo from this URL: https://github.com/Jacob-Jeffries/portfolio

2. In the root directory install all the NPM packages:
```
$ npm run install
```

3. Next, while still in the root directlroy, build the React App with the command below. This should have generated a folder called /client/build and will contain all the nessecary files for deploying this app.
```
$ npm run build
```

4. Once the build is complete you can run the following command to concurrently start the server and the client running in PM2. The server will be on port 5000 and the client will be on port 3000
```
$ npm run start
```

5. You can check the PM2 dashcord with the command below. The server is not connected to a database but will log the contact form information in the pm2 logs.
```
$ pm2 dashboard
```

## Usage
This is a simple ReactJS web application with a few navigation links at the top, click each link to load the relevent content on the page. 

![Screenshot](./screenshots/screenshot.png)

1. The page loads on the About Me content
2. Click on the Portfolio link to see a Carousel of my previous work
3. Click on the Education link to see my education
4. Click on the Research link to see my published research
5. Click on the Contact Me link to render a fillable form
6. Click on the Resume link to download a copy of my current resume

## Credits 
This Web Application was coded by Jacob Jeffries. 

Client:
*   React 17.0.2
*   React-Dom 17.0.2
*   React-scripts 5.0.1
*   Bootstrap 5.2.3
*   Axios 1.3.5

Server:
*   cors 2.8.5
*   dotenv 8.2.0
*   express 4.17.1
*   nodemon 2.0.4

Root:
*   node 18.14.0
*   npm 9.3.1
*   concurrently 5.2.0

