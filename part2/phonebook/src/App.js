import axios from 'axios';
import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonInputs from './components/PersonInputs';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const uri = 'http://localhost:3001';

  useEffect(() => {
    axios.get(`${uri}/persons`).then((res) => {
      console.log(res.data);
      setPersons(res.data);
    });
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
        <Persons persons={persons} filterName={filter} />
      </div>
    </div>
  );
};

export default App;
