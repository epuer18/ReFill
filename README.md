# ReFill

ReFill is an example application that provides a synthetic list of water bottle filling stations in a variety of locations This is useful to provide better knowledge about accessible water for those traveling in new areas, or looking to stay hydrated.

## Overview

- **Authors**: Wenxin Qi and [Eduardo Puerta](epuer18.github.io/personalWebPage)

## Relevant Project Links:

- **Deployed page**: https://refill-0gz1.onrender.com

- **Walkthrough Video**:

- **Slides**: https://docs.google.com/presentation/d/1Z337eg8nEhDx2ntlPndL_2rEs5UzT69E3cF-BJkMfSY/edit#slide=id.p1

- **Design Document**: [Click to view the design document PDF](designDoc/CS5610_Project3.pdf)

- **Class Link**: https://johnguerra.co/classes/webDevelopment_fall_2023/

## Installation:

- clone this repository to local machine

```
git clone https://github.com/epuer18/ReFill
```

- First we need to build the front end by running the following and install

```
cd client
npm install
npm run build
```

- Then we can go to the server install the dependencies and run the application

```
cd ..
cd server
npm install
```

- To run the app, go back to the project folder, run:

```
npm start

```

- make sure to add a .env file to the directory and make a `MONGO_URL` variable with the `uri` to connect to the right MongoDB Atlas database.

  - This site was developed with a database in MongoDB Atlas, to use the same database contact the authors with your IP number so that it can be added onto the permissions. Similarly, to prevent others from overusing these resources, we share a private key at our discression.
  - Otherwise you can create your own MongoDB Atlas project with a database named `ReFill` and two collections: `users` and `stations`.

```
MONGO_URL = "mongodb+srv://<username>:<password><info_database_cluster>"
```

## Technologies Used:

- JavaScript (ES6)
- HTML
- CSS
- React

- MongoDB
- Node.js
- Express.js
- React

## Screenshots of App

Below we show some screenshots of the site's main pages, and a brief description on how to navigate.

1. First we start on a landing page that asks us to sign up. Since this project aims to demonstrate the use of MongoDB and node express to build a backend we ask that you **DO NOT** use real credentials for this step.

![Screenshot of Landing page](/designDocs/screenshot_home.png)

2. Log in or sign up page.

![Screenshot of Landing page](/designDocs/screenshot_login.png)

3. Add a station.

![Screenshot of Landing page](/designDocs/screenshot_addstations.png)

4. See the stations!

![Screenshot of services to be booked](/designDocs/screenshot_stations.png)
