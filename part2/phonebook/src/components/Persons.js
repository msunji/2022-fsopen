const Persons = ({ persons, filterName }) => {
  return (
    <ul>
      {persons
        .filter(({ name }) => name.toLowerCase().includes(filterName.toLowerCase()))
        .map(({ name, number }) => (
          <li key={name}>
            {name} {number}
          </li>
        ))}
    </ul>
  );
};

export default Persons;
