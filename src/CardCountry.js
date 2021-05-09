function CardCountry({country}) {
     return (
          <div className="card Card">
               <div className="card-image">
                    <figure className="image is-3by2">
                         <img src={country.flag} alt="Placeholder image" />
                    </figure>
               </div>
               <div className="card-content">
                    <div className="content Card__content">
                         <p className="title font-weight-800 is-size-5">{country.name}</p>
                         <p><span className="font-weight-600">Population :</span> {country.population}</p>
                         <p><span className="font-weight-600">Region :</span> {country.region}</p>
                         <p><span className="font-weight-600">Capital :</span> {country.capital}</p>
                    </div>
               </div>
          </div>
     );
}

export default CardCountry;