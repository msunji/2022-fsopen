# Part 3 - Programming a server with NodeJS and Express

## 3.1
- [x] Implement a Node app that returns a hardcoded list of phonebook entries from the address `http://localhost:3001/api/persons`. The application must be started with `npm start` and offer an `npm run dev` command that restarts the server whenever changes are made and saved to a file in the source code.

## 3.2
- [x] Implement a page at the address `http://localhost:3001/info` that shows the number of people listed in the phonebook, as well as the time and date the request was received.

## 3.3
- [x] Implement functionality for showing the info for a single phonebook entry. If an etry for a given id is not found, the server must respond with the appropriate status code.

## 3.4
- [x] Implement functionality that makes it possible to *delete* a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.

## 3.5
- [x] Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address `http://localhost:3001/api/persons`.

Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate ids is small.

## 3.6
- [x] Implement error handling for creating new entries. The request isn't allowed to success if a number or name is missing OR the name already exists in the phonebook. Be sure to respond to requests like these with the approprite status code, and asend back info that explains the reason for the error.

## 3.7
- [x] Add morgan middleware to the app and log messages using the *tiny* configuration

## 3.8
- [x] Configure morgan to use a custom token to show data sent in HTTP POST requests.
