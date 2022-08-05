const PersonInputs = ({ handleSubmit, handleName, handleNumber }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleName} />
      </div>
      <div>
        number: <input onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonInputs;
