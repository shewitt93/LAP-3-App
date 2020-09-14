## Installation & usage
### Installation
- Clone or download the repo.
- In your command line, run `npm install` in both the client and server.
- run the seeds file by first creating a table UserData in PostgreSQL, then running' \i <pathname>.database/seeds.sql
- create a .env file in your server folder and insert jwtSecret = "yoursecret"
### Usage
- In your command line, run `npm start` to run the app in both the client and server(open 2 terminals.
- React should open on localhost 8000 in browser

## Technologies
- React, redux
- Webpack
- JavaScript
- HTML, CSS
- PostgreSQL
- Bcyrpt
- JWT


## Process
- Started by wireframing the pages in Figma
- Wrote pseudo code to break down the logic of collecting user input, collecting information from the API, linking the two and assigning functionality to buttons.
- Used Webpack to configure our server and development setup.
- created database schema then SQL file
- Set up authentication with JWT tokens which were used to authenticate frontend routes

## Challenges
- Frequency of habits
- Authentication

## Future features
- Lost password email reset
- Settings page for changing password and other details as well as deleting account


## License
- [MIT License](https://opensource.org/licenses/mit-license.php)


## Collaborators
[@MugishaU](https://github.com/MugishaU), [@shewitt93](https://github.com/shewitt93),[@atheermusa](https://github.com/atheermusa), [@JamieSear](https://github.com/JamieSear)
