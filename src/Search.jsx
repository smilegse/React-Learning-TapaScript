
function Search() {
  return (
    <div className="flex">
      <input type='text' className="mb-4 border rounded-md p-1" placeholder="Search cars..." />
      <span className="font-semibold p-1 px-3">
        <input type='checkbox'/> Show premium only
      </span>
    </div>
    
    
  )
}

export default Search