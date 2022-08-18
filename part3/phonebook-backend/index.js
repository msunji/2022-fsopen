const express = require('express');
const app = express();
const PORT = 3001;

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  },
  {
    "id": 5,
    "name": "Majima Goro",
    "number": "12-23-45356465"
  },
];

app.get('/info', (req, res) => {
  const phonebookLength = persons.length;
  const time = new Date();
  const routeHtml = `<div><p>Phonebook has info for ${phonebookLength} people</p><p>${time}</p></div>`
  res.send(routeHtml);
})

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const paramId = Number(req.params.id);
  const person = persons.find(person => person.id === paramId);

  if (person) {
    res.status(200).json(person);
  } else {
    res.status(404).end();
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const paramId = Number(req.params.id);
  persons = persons.filter(person => person.id !== paramId);
  res.status(204).end();
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})