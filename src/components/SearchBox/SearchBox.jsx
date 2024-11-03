import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice"; // Импортируем действие

const SearchBox = () => {
  const dispatch = useDispatch(); // Получаем доступ к dispatch

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value)); // Диспатчим новое значение фильтра
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={handleChange} // Обрабатываем изменение ввода
      />
    </div>
  );
};

export default SearchBox; // Экспортируем компонент
