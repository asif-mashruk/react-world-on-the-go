import React, { use, useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries,setVisitedCountries] =useState([]);
  const [visitedFlags,setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) =>{
    console.log('handleVisitedCountries  clicked',country);
    setVisitedCountries([...visitedCountries,country]);
  }

  const handleVisitedFlags = (flag) =>{
    const newVisitedFlags =[...visitedFlags,flag];
    setVisitedFlags(newVisitedFlags);
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>Me and my wife visited these countries : {countries.length}</h1>
      <h3>Total Countries Visited :{visitedCountries.length}</h3>
      <h3>Total flags visited : {visitedFlags.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li key={country.cca3.cca3}> {country.name.common}</li>)
        }
      </ol>
      <div className="visited-flags-container">
        {
          visitedFlags.map((flag,index) =>  <img key={index} src={flag}></img>)
        }
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country} handleVisitedCountries ={handleVisitedCountries} handleVisitedFlags ={handleVisitedFlags} ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
