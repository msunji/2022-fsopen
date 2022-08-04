import { useState } from 'react';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const checkNameExists = (name) => {
    return persons.some(person => person.name.toLowerCase() === name.toLowerCase());
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (checkNameExists(newName)) return alert(`${newName} has already been added to the phonebook.`);

    const personObj = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObj));
     // note that concat returns a new array
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  } 

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
