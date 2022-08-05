import axios from 'axios';
import { useEffect, useState } from 'react';
import View from './components/View';

const Country = ({ countryInfo }) => {
  const { name, flags, languages, capital, area } = countryInfo;
  const [open, setOpen] = useState(false);

  return (
    <>
      <p>
        {name.common} <button onClick={() => setOpen(!open)}>show</button>
      </p>
      {open ? (
        <View
          key={name.common}
          countryInfo={{ name, flags, languages, capital, area }}
        />
      ) : null}
    </>
  );
};

const Countries = ({ countries }) => {
  let numCountries = countries.length;
  if (numCountries > 10) {
    return <p>Too many matches, try something more specific</p>;
  }
  if (numCountries <= 10 && numCountries > 1) {
    return (
      <div>
        {countries.map(({ name, flags, languages, capital, area }) => (
          <Country key={name.common} countryInfo={{ name, flags, languages, capital, area }} />
        ))}
      </div>
    );
  }
  if (numCountries === 1) {
    return (
      <div>
        {countries.map(({ name, flags, languages, capital, area }) => (
          <View
            key={name.common}
            countryInfo={{ name, flags, languages, capital, area }}
          />
        ))}
      </div>
    );
  }
};

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  console.log(countries);

  useEffect(() => {
    axios.get(process.env.REACT_APP_COUNTRIES_API_ENDPOINT).then((res) => {
      if (query)
        return setCountries(
          res.data.filter(({ name }) =>
            name.common.toLowerCase().includes(query.toLowerCase())
          )
        );
    });
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      find countries <input onChange={handleSearch} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
