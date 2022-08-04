import { useState } from 'react';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleFormSubmit = (e) => {
    const checkNameExists = (name) => {
      return persons.some(
        (person) => person.name.toLowerCase() === name.toLowerCase()
      );
    };
    e.preventDefault();

    if (checkNameExists(newName))
      return alert(`${newName} has already been added to the phonebook.`);

    const personObj = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObj));
    // note that concat returns a new array
    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter by name: <input onChange={handleFilterChange} />
      </div>
      <div>
        <h2>Add New Entry</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            name: <input onChange={handleNameChange} />
          </div>
          <div>
            number: <input onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <div>
        <h2>Numbers</h2>
        <Persons persons={persons} setFilter={filter} />
      </div>
    </div>
  );
};

export default App;
