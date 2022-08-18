const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

let persons = [
  {
    "id": 21,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 11,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 33,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 45,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  },
];

const genId = () => {
  return Math.floor(Math.random() * 100);
}

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

app.post('/api/persons', (req, res) => {
  const newEntry = req.body;

  const exists = persons.some(person => person.name.toLowerCase() === newEntry.name.toLowerCase());

  if (!newEntry.number || !newEntry.name) {
    return res.status(400).json({
      error: 'Missing name or number'
    })
  }
  if (exists) {
    return res.status(400).json({
      error: "Entry alredy exists in phonebook"
    })
  }
  newEntry.id = genId();
  console.log('new entry', newEntry);
  res.json(newEntry);
})

app.delete('/api/persons/:id', (req, res) => {
  const paramId = Number(req.params.id);
  persons = persons.filter(person => person.id !== paramId);
  res.status(204).end();
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})