const Persons = ({ persons, setFilter }) => {
  console.log(setFilter);
  return (
    <ul>
      {persons.map(({ name, number }) => (
        <li key={name}>
          {name} {number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
