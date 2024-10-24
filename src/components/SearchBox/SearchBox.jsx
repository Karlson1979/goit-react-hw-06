

const SearchBox = ({searchUser,searchValue}) => {
  return (
    <div>
        <p>Find contacts by name</p>
        <input type="text" value={searchValue} onChange={searchUser}/>
    </div>
  )
}
export default SearchBox