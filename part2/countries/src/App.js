import axios from 'axios';
import { useEffect, useState } from 'react';

const View = ({ countryInfo }) => {
  const { name, flags, languages, capital, area } = countryInfo;
  return (
    <div>
      <div>
        <h1>{name.common}</h1>
        <p>
          <b>Capital</b> {capital}
        </p>
        <p>
          <b>Area</b> {area}
        </p>
      </div>
      <div>
        <b>languages</b>
        {/* <ul>
          {}
        </ul> */}
      </div>
      <div>
        <img src={flags.svg} alt={`${name.common} flag`} width="400" />
      </div>
    </div>
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
        {countries.map(({ name }) => (
          <p key={name.common}>{name.common}</p>
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
