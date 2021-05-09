function Search({value, onValueChange}) {
     return (
          <div className="control has-icons-left">
               <input 
                    className="input is-normal Search__input" 
                    type="text" 
                    placeholder="Search for a country..."
                    value={value}
                    onChange={(event) => onValueChange(event.target.value)} />
               <span className="icon is-left Search__icon">
                    <ion-icon name="search-outline"></ion-icon>
               </span>
          </div>

     );
}

export default Search;