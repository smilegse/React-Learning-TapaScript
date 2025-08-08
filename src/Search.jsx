import PropTypes from "prop-types"

function Search({searchTerm, onSearchBook}) {
  return (
    <form>
      <input 
        type='text' value={searchTerm} 
        className="mb-4 border rounded-md p-1 w-full" 
        placeholder="Search books..." 
        onChange={(event) => onSearchBook(event.target.value)}
      />
    </form>
    
  )
}

Search.PropTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired
}

export default Search