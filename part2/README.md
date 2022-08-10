# Part 2 Exercises

**Courseinfo V2 exercises**
## 2.1
- [x] Define a component (`Course`) for formatting a single course. The app must work regardless of the number of parts a course has.

## 2.2
- [x] Show the sum of exercises for the course

## 2.3
- [x] If you haven't done it yet, calculate the sum with `reduce`

## 2.4
- [x] Allow for an arbitrary number of courses.

## 2.5
- [x] Declare the `Course` component as a separate module imported by the `App` component. You can include all the subcomponents in the `Course` module.

---
**Phonebook exercises**

## 2.6
- [x] Implement the addition of a person to the phonebook

## 2.7
- [x] Prevent a user from being able to add names that already exist in the phonebook. Issue a warning with the `alert` command if a user attemps this.

## 2.8
- [x] Expand your application by allowing users to add phone numbers to the phonebook.

## 2.9
- [x] Implement a search field to filter the list of people by name

## 2.10
- [x] If you haven't already done it, refactor your app into at least three components. You may want to start  with: the search filter, the form, and the component that renders a single person's details.

## 2.11
- [x] Start json-server on port 3001 and return the list of people in *db.json*. Modify the app such that the data is fetched from the server using axios and a useEffect hook.

---
**Countries exercises**
## 2.12
- [x] Create an application that pulls data from the REST Countries API (https://restcountries.com/). A country or a list of countries is shown when a user types a search query in the search field. If there are over 10 countries that match the query, users are prompted to make their query more specific. Otherwise, show a list of all countries. If only one country matches the query, show basic data (capital, area, flag, languages spoken)

## 2.13
- [x] When names of multiple countries are shown, show a button next to the country's name. When pressed, it should show the country-view for that country (basically, show basic info for that country)

## 2.14
- [x] Add weather data to the country view.

---
**Phonebook Exercises Continued**
## 2.15
- [x] Save phonebook entries to the backend server.

## 2.16
- [x] Extract code that handles communication with the backend into its own module

## 2.17
- [x] Add delete entry function. Confirm action with the `window.confirm` method
Ran into a few errors here, and then realised I had forgotten to pass the id of the phonebook entry to be deleted.

## 2.18
- [x] If a number is added to an already existing user, replace the old number with the new number. HTTP PUT method is recommended. Again, user needs to confirm this action thru the `window.confirm` method

Conditions are as follows:
1. If a new entry is added and the number and name match an existing phonebook entry, show an alert that says the exact entry already exists
2. If a new entry is added and the name matches and existing phonebook entry, but the number doesn't match said entry's existing number, then show a dialog box that asks for a user to confirm whether they'd like to update the entry or not


## 2.19
- [ ] Add a styled message to show a notification that lasts for a few seconds after a sucessful operation is executed (person is added or a number is changed)

## 2.20
- [ ] Show a styled message when a user encounters an error.



