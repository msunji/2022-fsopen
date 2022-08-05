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
        <ul>
          {
            Object.values(languages).map((language) => <li key={language}>{language}</li>)
          }
        </ul>
      </div>
      <div>
        <img src={flags.svg} alt={`${name.common} flag`} width="400" />
      </div>
    </div>
  );
};

export default View;