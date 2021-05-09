const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const regionOptions = regions.map((region, index) => {
     return <option key={index} value={region}>{region}</option>
});

function Filter({ onSelected }) {
     return (
          <div className="select is-normal">
               <select className="Filter__select" onChange={(event) => onSelected(event.target.value)}>
                    <option value="">Filter by Region</option>
                    {regionOptions}
               </select>
          </div>
     );
}

export default Filter;