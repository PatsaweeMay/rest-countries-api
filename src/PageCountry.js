import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import Title from './Title';

function PageCountry() {
     const [country, setCountry] = useState({});

     const { countryCode } = useParams();

     async function getCountry(code){
          const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
          const responseJson = await response.json();
          console.log(responseJson);
          setCountry(responseJson);
     }

     useEffect(() => {
          getCountry(countryCode);
     }, [countryCode]);

     let borderElements = null;
     if(!!country.borders){
          borderElements = country.borders.map((border, index) => {
               return <Link key={index} to={`/country/${border}`}><span className="tag mx-1 my-1 Tag">{border}</span></Link>
          });
     }

     return (
          <div className="container is-max-widescreen">
               <section className="section">
                    <Link to="/"><button className="button Button">Back</button></Link>
               </section>
               <section className="section pt-0">
                    <div className="columns">
                         <div className="column">
                              <figure className="image is-3by2">
                                   <img src={country.flag} alt="flag" />
                              </figure>
                         </div>
                         <div className="column is-flex is-flex-direction-column is-justify-content-center">
                              <p className="title font-weight-800 is-size-4">{country.name}</p>
                              <div className="columns is-gapless">
                                   <div className="column">
                                        <Title title="Native Name">{country.nativeName}</Title>
                                        <Title title="Populations">{country.population}</Title>
                                        <Title title="Region">{country.region}</Title>
                                        <Title title="Sub Region">{country.subregion}</Title>
                                        <Title title="Capital">{country.capital}</Title>
                                   </div>
                                   <div className="column">
                                        <Title title="Top Level Domain">{(!!country.topLevelDomain)? country.topLevelDomain.join():''}</Title>
                                        <Title title="Currencies">{(!!country.currencies)? country.currencies.map(currency => currency.code).join():''}</Title>
                                        <Title title="Languages">{(!!country.languages)? country.languages.map(lang => lang.name).join():''}</Title>
                                   </div>
                              </div>
                              <Title title="Border Countries">
                                   {borderElements}
                              </Title>
                         </div>
                    </div>
               </section>
          </div>
     );
}

export default PageCountry;