import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.value);
  const handleSearchChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBox;
