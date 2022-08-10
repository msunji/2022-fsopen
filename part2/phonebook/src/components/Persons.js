const Persons = ({ persons, filterName, handleDelete }) => {
  return (
    <ul>
      {persons
        .filter(({ name }) => name.toLowerCase().includes(filterName.toLowerCase()))
        .map(({ id, name, number }) => (
          <li key={name}>
            {name} {number} <button onClick={() => handleDelete(id, name)}>delete</button>
          </li>
        ))}
    </ul>
  );
};

export default Persons;
