import React, { useState } from 'react';
import './country.css'



const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const handleVisited = () =>{
    // if(visited){
    //     setVisited(false);
    // }
    // else{
    //     setVisited(true);
    // }

    // setVisited(visited ? false :true);

    setVisited(!visited);
    handleVisitedCountries(country);
    }
    
    const [visited,setVisited] =useState(false);
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name :{country.name.common}</h3>
            <h4>Capital : {country.capital.capital}</h4>
            <p>Population : {country.population.population}</p>
            <p>Languages :{Object.values(country.languages.languages).join(" ,")}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() => handleVisitedFlags(country.flags?.flags?.png)}>Add visited Flag</button>
        </div>
    );
};

export default Country;