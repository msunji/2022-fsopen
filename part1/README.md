# Exercises and Solution Notes
## 1.1
- [x] Refactor the code so it consists of three new components: `Header`, `Content`, `Total`
  - At this point, the new components are defined in `App.js`

- Kept everything pretty simple. Each part and the number of exercises for said part is passed in an array to three different props in the `Content` component.
- Used `reduce` to get the total number of exercises

## 1.2
- [x] Refactor the `Content` component so it doesn't render any names of parts or their number of exercies by itself. 

- Made a new `Part` component that takes the part name and the number of exercises associated with it as props.

---

## 1.3
- [x] Modify the variable definitions and refactor accordingly

## 1.4
- [x] Once again, modify the variable definitions, this time by placing the objects in an array. Refactor accordingly.
  - At this point, assume there are always three items - no loops yet at this point, but do not pass the different objects as eparate props and instead pass them directly as an array

## 1.5
- [x] Change the course and its parts into a single JS object. Refactor accordingly.

---
**Unicafe Exercises**
## 1.6
- [x] Collect customer feedback (three options: good, neutral and bad) and then display the total number of collected feedback for each category. 

## 1.7
- [x] Expand the app to show more statistics about the gathered feedback. You'll want to show: the total number of collected feedback, the average score (good: 1, neutral: 0, and bad: -1), as well as the percentage of positive feedback.

## 1.8
- [x] Refactor the app so statistics are extracted into a `Statistics` component. State should remain in `App`

## 1.9
- [x] Change your app to display statistics only once feedback has been gathered

## 1.10
- [x] Refactor the application by extracting the following components: `Button` for buttons to submit feedback and `StatisticLine` for displaying a single statistic

## 1.11*
- [x] Display statistics in an HTML table

---
**Anecdotes Exercises**
## 1.12
- [x] Add a button that can be clicked to display a random anecdote

## 1.13
- [x] Expand the app by letting users vote for the displayed anecdote

## 1.14
- [x] Display the anecdote with the largest number of votes. If multiple anecdotes are tied for first place, just show one of them.