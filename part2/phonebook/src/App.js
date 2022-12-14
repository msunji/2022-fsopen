import './styles/index.css';
import personService from './services/persons';
import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonInputs from './components/PersonInputs';
import Persons from './components/Persons';
import Toast from './components/Toast';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [toastMsg, setToastMsg] = useState('');
  const [errorType, setErrorType] = useState(false);

  useEffect(() => {
    personService.getEntries().then((allEntries) => {
      setPersons(allEntries);
    });
  }, []);

  const entryObj = {
    name: newName,
    number: newNumber,
  };

  const removeToast = () => {
    if (errorType) {
      setTimeout(() => {
        setToastMsg('');
        setErrorType(false);
      }, 4000);
    } else {
      setTimeout(() => {
        setToastMsg('');
      }, 4000);
    }
  }

  const handleUpdate = () => {
    if (
      window.confirm(
        `${newName} already exists. Would you like to replace the old number with a new one?`
      )
    ) {
      const entryToUpdate = persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      );
      const updatedEntry = { ...entryToUpdate, number: newNumber };

      personService
        .updateEntry(updatedEntry.id, updatedEntry)
        .then((updated) => {
          setPersons(
            persons.map((person) =>
              person.id === updatedEntry.id ? updated : person
            )
          );
          setToastMsg(`Successfully updated ${newName}'s number`);
          removeToast();
          setNewName(() => '');
          setNewNumber(() => '');
        })
        .catch((err) => {
          setErrorType(true);
          setToastMsg(`We've run into some problems, ${newName} seems to be missing from the phonebook.`)
          removeToast();
        });
    }
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
      setPersons(persons.filter((person) => person.id !== id));
    }
    return;
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFormSubmit = (e) => {
    const nameExists = (name) => {
      return persons.some(
        (person) => person.name.toLowerCase() === name.toLowerCase()
      );
    };

    const numExists = (num) => {
      return persons.some((person) => person.number === num);
    };
    e.preventDefault();

    if (nameExists(newName) && numExists(newNumber))
      return alert(
        `An entry for ${newName} with the same number already exists.`
      );

    if (nameExists(newName) && !numExists(newNumber)) return handleUpdate();

    return personService
      .addEntry(entryObj)
      .then((newEntry) => {
        setPersons(persons.concat(newEntry));
        // note that concat returns a new array
        setToastMsg(`Successfully added ${newName} to phonebook`);
        removeToast();
        setNewName(() => '');
        setNewNumber(() => '');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      {toastMsg && (<Toast message={toastMsg} errorState={errorType} />)}
      <Filter handleFilter={handleFilterChange} />
      <div>
        <h2>Add New Entry</h2>
        <PersonInputs
          name={newName}
          number={newNumber}
          handleSubmit={handleFormSubmit}
          handleName={handleNameChange}
          handleNumber={handleNumberChange}
        />
      </div>
      <div>
        <h2>Numbers</h2>
        <Persons
          persons={persons}
          filterName={filter}
          handleDelete={handleDeleteEntry}
        />
      </div>
    </div>
  );
};

export default App;
