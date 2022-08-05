const Filter = ({ handleFilter }) => {
  return (
    <div>
    Filter by name: <input onChange={handleFilter} />
  </div>
  )
}

export default Filter;