# Camper Book Swap
Web application to manage a book trading club and allow swapping of books between other users.

## User Story
Here are the specific user stories implemented for this project:

1. I can view all books posted by every user.
1. I can add a new book.
1. I can update my settings to store my full name, city, and state.
1. I can propose a trade and wait for the other user to accept the trade.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Things you need to install to run the app:

- Node
- MongoDB

### Installing

Get the repository

```
git clone https://github.com/roxroy/camper-bookswap.git
cd camper-bookswap
npm install
```

Make a copy of `env.example` as `.env`
```
cp env.example .env
```

In a new terminal, go to the project folder, create a data folder and start mongo
```
mkdir data
mongod --dbpath=./data
```

In a new terminal, go to the project folder (folder with server.js) and run the following:
```
npm run start
```

Access the app through the browser, http://localhost:3000.


## Deployment

Release build is optimized for deployment to Heroku and MLab. Don't forget to set environment variables on Heroku from .env.

## Built With

* [MongoDB](https://www.mongodb.com/) - NoSQL database
* [Express.js](https://expressjs.com/) - Web application framework
* [Node.js](https://nodejs.org/en/) - Platform for network applications


## Contributing

Please open any issues that you encounter on [the GitHub repo issue page](https://github.com/roxroy/camper-bookswap/issues).

## Authors

* **Roxroy** - [roxroy](https://github.com/roxroy)


## Acknowledgments

* Hat tip to anyone who's code was used