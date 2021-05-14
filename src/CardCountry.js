import Title from './Title';

function CardCountry({country}) {
     return (
          <div className="card Card">
               <div className="card-image">
                    <figure className="image is-3by2">
                         <img src={country.flag} alt={`flag of ${country.name}`} />
                    </figure>
               </div>
               <div className="card-content">
                    <div className="content Card__content">
                         <p className="title font-weight-800 is-size-5">{country.name}</p>
                         <Title title="Population">{country.population}</Title>
                         <Title title="Region">{country.region}</Title>
                         <Title title="Capital">{country.capital}</Title>
                    </div>
               </div>
          </div>
     );
}

export default CardCountry;