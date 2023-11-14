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

## Functionalities:

## Installation:

- clone this repository to local machine

```
git clone https://github.com/epuer18/ReFill
```

- First we need to build the front end by running the following and insta

```
cd client

```

```
npm install
```

- add a .env file to the directory and make a `MONGO_URL` variable with the `uri` to connect to the right MongoDB Atlas database.

  - This site was developed with a database in MongoDB Atlas, to use the same database contact the authors with your IP number so that it can be added onto the permissions. Similarly, to prevent others from overusing these resources, we share a private key at our discression.
  - Otherwise you can create your own MongoDB Atlas project with a database named `HousekeepingApp` and two collections: `users` and `services`.

```
MONGO_URL = "mongodb+srv://<username>:<password><info_database_cluster>"
```

- finally run the application locally with `npm start`

```
npm start
```

## Technologies Used:

- JavaScript (ES6)
- HTML
- CSS

- MongoDB
- Node.js
- Express.js

## Screenshots of App

Below we show some screenshots of the site's main pages, and a brief description on how to navigate.

1. First we start on a landing page that asks us to sign up. Since this project aims to demonstrate the use of MongoDB and node express to build a backend we ask that you **DO NOT** use real credentials for this step.

<img width="1051" alt="Screenshot of landing page with sign up and log in" src="https://github.com/epuer18/HousekeepingService/assets/88179209/127af772-cf04-49be-a9e8-c9ce67498091">

2. After logging in or signing up, you can choose to add a service entry to the database or see the available services to book them. Click on the corresponding button.

![Screenshot of page prompting users with booking or posting optinos](assets/img/house_action.png)

3. For the Posting section, open the form and fill with relevant details.

![Screenshot of posting page, with a a form to upload services](assets/img/postServForm.png)

4. Once form is filled and submitted, all details will be displayed. A delete option is given if you wish to delete your service. It will also remove from the booking section.

![Screenshot of posting page, with all data collected displayed and delete option](assets/img/postCards.png)

5. For the booking section, see what services are available and make sure to call whichever you like best. Afterwards come back and add a rating so other users can see which services are good!

![Screenshot of services to be booked](assets/img/house_booking.png)

## Other

AI prompts and responses used for this project are stored in the following document:

- [prompts.md](prompts.md)
