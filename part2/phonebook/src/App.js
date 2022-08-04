import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const checkNameExists = (name) => {
    return persons.some(person => person.name.toLowerCase() === name.toLowerCase());
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (checkNameExists(newName)) return alert(`${newName} has already been added to the phonebook.`);

    const personObj = {
      name: newName
    }
    setPersons(persons.concat(personObj));
     // note that concat returns a new array
    setNewName('');

  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  );
};

export default App;
