import { useEffect, useState } from 'react';
import Search from './Search';
import Filter from './Filter';
import CardCountry from './CardCountry';

function PageHome(){
     const [countries, setCountries] = useState([]);
     const [search, setSearch] = useState('');
     const [filter, setFilter] = useState('');
     const [loading, setLoading] = useState('');

     useEffect(() => {
          fetch('https://restcountries.eu/rest/v2/all').then(res => {
               return res.json();
          }).then(resJson => {
               setLoading('is-hidden');
               setCountries(resJson);
          });
     }, [])

     let filterCountries = countries;
     if(!!filter){
          filterCountries = countries.filter((country) => {
               return country.region === filter;
          });
     }

     const countryElements = filterCountries.filter((country) => {
          return country.name.toLowerCase().includes(search);
     }).map((country, index) => {
          return (
               <div key={index} className="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen pb-6"><CardCountry country={country} /></div>
          );
     });

     return (
          <div className="container is-max-widescreen">
               <section className="section">
                    <div className="columns is-mobile is-multiline is-flex is-justify-content-space-between">
                         <div className="column is-12-mobile is-6-tablet is-5-desktop is-4-widescreen">
                              <Search value={search} onValueChange={setSearch} />
                              </div>
                         <div className="column is-12-mobile is-4-tablet is-flex-tablet is-justify-content-flex-end">
                              <Filter onSelected={setFilter} />
                         </div>
                    </div>
               </section>
               <div className={`is-flex is-justify-content-center ${loading}`}>
                    <div className="lds-ripple"><div></div><div></div></div>
               </div>
               <section className="section">
                    <div className="columns is-mobile is-multiline is-variable is-8">
                         {countryElements}
                    </div>
               </section>
          </div>
     );
}

export default PageHome;