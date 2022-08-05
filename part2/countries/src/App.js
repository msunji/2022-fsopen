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
          showWeather={false}
        />
      ) : null}
    </>
  );
};

const Countries = ({ countries, weatherData }) => {
  let numCountries = countries.length;
  if (numCountries > 10) {
    return <p>Too many matches, try something more specific</p>;
  }
  if (numCountries <= 10 && numCountries > 1) {
    return (
      <div>
        {countries.map(({ name, flags, languages, capital, area }) => (
          <Country
            key={name.common}
            countryInfo={{ name, flags, languages, capital, area }}
          />
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
            countryInfo={{ name, flags, languages, capital, area, weatherData }}
            showWeather={true}
          />
        ))}
      </div>
    );
  }
};

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

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

  useEffect(() => {
    const endpoint = process.env.REACT_APP_OPENWEATHER_ENDPOINT;
    const openWeatherKey = process.env.REACT_APP_OPENWEATHER_APIKEY;
    if (countries.length === 1) {
      const [lat, lng] = countries[0].capitalInfo.latlng;
      axios
        .get(
          `${endpoint}?lat=${lat}&lon=${lng}&appid=${openWeatherKey}&units=metric`
        )
        .then((res) => {
          setWeather(res.data);
        });
    }
  }, [countries]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      find countries <input onChange={handleSearch} />
      <Countries countries={countries} weatherData={weather} />
    </div>
  );
}

export default App;
