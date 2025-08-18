import PropTypes from "prop-types"
function Search({searchTerm, onSearchCar, isPremiumOnly, onCheckChange}) {
  return (
    <div className="flex">
      <form>
        <input type='text' 
          value={searchTerm}
          className="mb-4 border rounded-md p-1" 
          placeholder="Search cars..." 
          onChange={(event)=> onSearchCar(event.target.value)}
        />
        <span className="font-semibold p-1 px-3">
          <input type='checkbox' 
            checked={isPremiumOnly} 
            onChange={(event) => onCheckChange(event.target.checked) }
          /> Show premium only
        </span>
      </form>      
    </div>    
  )
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
  isPremiumOnly: PropTypes.bool.isRequired,
  onCheckChange: PropTypes.func.isRequired,
}

export default Search