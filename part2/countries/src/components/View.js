const WeatherView = ({ capital, weatherData }) => {
  const { main, wind, weather } = weatherData;
  const { icon, description } = weather[0];
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>
        <b>Temperature:</b> {main.temp} celsius
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>
        <b>Wind:</b> {wind.speed} m/s
      </p>
    </div>
  );
};

const View = ({ countryInfo, showWeather }) => {
  const { name, flags, languages, capital, area, weatherData } = countryInfo;
  console.log(weatherData);
  return (
    <>
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
        <ul>
          {Object.values(languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={flags.svg} alt={`${name.common} flag`} width="400" />
      </div>
      {showWeather ? (
        <WeatherView capital={capital} weatherData={weatherData} />
      ) : null}
    </>
  );
};

export default View;
