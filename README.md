# ReFill

ReFill is an example application that provides a synthetic list of water bottle filling stations in a variety of locations This is useful to provide better knowledge about accessible water for those traveling in new areas, or looking to stay hydrated.

## Overview

- **Authors**: [Wenxin Qi](https://wenxinq7.github.io/) and [Eduardo Puerta](epuer18.github.io/personalWebPage)

## Relevant Project Links:

- **Deployed page for version 1 (project 3)**: https://refill-0gz1.onrender.com

- **Deployed page for version 2 (final project)**: https://refill-u4np.onrender.com

- **Usability Report**: [Click to view the usability report PDF](designDocs/report-template-usability-test_0.pdf)

- **Informed Consent Form**: [Click to view a copy of the Informed Consent form PDF](designDocs/ReFill-Signed-Informed-Consent.docx.pdf)

- **Walkthrough Video**: https://youtu.be/YNNqmDGtnqs

- **Slides**: https://docs.google.com/presentation/d/1M19QANyeNJpeUwWvkLbslmQ6AXJlAH922HhH4Ki4qFY/edit?usp=sharing

- **Design Document**: [Click to view the design document PDF](designDoc/CS5610_Project3.pdf)

- **Class Link**: https://johnguerra.co/classes/webDevelopment_fall_2023/

## Installation:

- clone this repository to local machine

```
git clone https://github.com/epuer18/ReFill
```

- First we need to install and build at the project folder

```
npm install

npm run build
```

- To run the app, go the project folder, run:

```
npm run start

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

Below we show some screenshots of the site's main pages, and a brief description on how to navigate after improvement.

1. First we start on a landing page that asks us to sign up. Since this project aims to demonstrate the use of MongoDB and node express to build a backend we ask that you **DO NOT** use real credentials for this step.

![Screenshot of Landing page](/new_screenshot/homePage.png)

2. Log in or sign up page.

![Screenshot of Landing page](/new_screenshot/loginPage.png)

3. Add a station.

![Screenshot of Landing page](/new_screenshot/addStationPage.png)

4. See the stations!

![Screenshot of services to be booked](/new_screenshot/stationsPage.png)
