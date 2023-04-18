# BEAM


## Abstract:

[//]: <>

Beam is a self-care application intended to help the user work through any kind of feeling or emotion they might be experiencing. The user will be asked to choose a feeling and reflect on it, add anything about their experience that might help them avoid or recreate the feeling in the future (depending on the feeling). After their reflection, they will see an offering of a few activities that might help. Their entries will be available to them in the Feelings Archive for future reflection and can be edited whenever they'd like. 


## Installation Instructions:

[//]: <>

#### Deployed Link:
[BEAM](https://beam-pearl.vercel.app/)

#### Local Installation:
1. Fork this repository.
2. Create a local repository.
3. Follow the Github on-screen commands to connect your local repository to your newly forked repository.
4. Change directories into `client` and run `npm install`, then `npm start` to start the application locally.
5. Change directories into `server` and run `npm install` then `nodemon server.js` to start the server locally
	1. **NOTE** - Running the server locally requires you to have a PostreSQL database created and configured locally with a table named `entries`. Once you have that set up, you can edit the `development` object within `knexfile.js` to use your correct `user` and `password` information. Once this has been updated, you can use the commands `npx knex migrate:latest` to migrate the latest schema to your database, and `npx knex seed:run` to seed the table with data.
6. Navigate to `http://localhost:3000` in your browser to use the application. 
  

## Preview of App:

[//]: <>

![](https://github.com/espressoGoddess/beam/blob/main/Beam1.gif)
![](https://github.com/espressoGoddess/beam/blob/main/Beam2.gif)


## Context:

[//]: <>

This application was completed as part of the Turing School of Software and Design Mod 3 curriculum.

Between Wednesday April 5th and Monday April 17th of 2023, we spent around 30 hours studying the new technologies, planning out our project, and coding both individually and collaboratively to complete this application.

  
## Learning Goals:

[//]: <>

- Learn the fundamentals of backend engineering using Express, Knex, and PostgreSQL
- Use these tools to create a basic CRUD application that utilizes RESTful APIs. 


## Technologies used:

To create our local database, we used:
- Knex
- Express
- PostgresQL
- Node.js
- CORS
- Postman
- PGadmin

To design and test our front end, we used:
- React (JavaScript, CSS, HTML)
- React Router
- Cypress
- ESLint
- Luxon Date Wrapper


## Contributors:

[//]: <>

[**J**oseph 'Joe' Fogiato](https://github.com/jfogiato)

[**A**mber Shipley](https://github.com/espressoGoddess)

[**C**. R. Cooper](https://github.com/chrissycooper)

[**K**atherine Blaine](https://github.com/KatherineBlaine)


## Wins + Challenges:

[//]: <>

### Wins: 

- Our major win was successfully learning and implementing a back-end utilizing Express.js & PostgreSQL/Knex. We deepened our understanding of the relationship between servers and databases and also learned about the tools one can use to create database schemas. We created routes for GET, POST, and PUT network requests. This was the first time any of our team used these technologies.
- We auspiciously created React functional components and implemented various hooks for state management. Prior to this we had all utilized class based components to use and manage state. 
- We successfully navigated merge conflicts without issue, which arose due to working asynchronously.

### Challenges: 

- While creating a back-end site was a win, it was also a challenge. Being a new concept, we spent a lot of time figuring out how all the pieces fit together and how to implement and navigate each team member creating a local database.
- We had challenges with understanding, creating, and implementing migrations. This became especially difficult when we needed to update the previously created table with a new migration.
- It was difficult to simultaneously intercept multiple different network requests for testing the application with Cypress.
