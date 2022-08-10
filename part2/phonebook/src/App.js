import personService from './services/persons';
import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonInputs from './components/PersonInputs';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personService.getEntries().then(allEntries => {
      setPersons(allEntries);
    })
  }, []);

  const handleFormSubmit = (e) => {
    const checkNameExists = (name) => {
      return persons.some(
        (person) => person.name.toLowerCase() === name.toLowerCase()
      );
    };
    e.preventDefault();

    if (checkNameExists(newName))
      return alert(`${newName} has already been added to the phonebook.`);

    const entryObj = {
      name: newName,
      number: newNumber,
    };

    personService.addEntry(entryObj).then(newEntry => {
      setPersons(persons.concat(newEntry));
      // note that concat returns a new array
      setNewName('');
      setNewNumber('');
    })
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleDeleteEntry = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.deleteEntry(id);
      setPersons(persons.filter(person => person.id !== id));
    }
    return;
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleFilter={handleFilterChange} />
      <div>
        <h2>Add New Entry</h2>
        <PersonInputs
          handleSubmit={handleFormSubmit}
          handleName={handleNameChange}
          handleNumber={handleNumberChange}
        />
      </div>
      <div>
        <h2>Numbers</h2>
        <Persons persons={persons} filterName={filter} handleDelete={handleDeleteEntry} />
      </div>
    </div>
  );
};

export default App;
