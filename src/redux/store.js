// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filterReducer from "./filterSlice"; // Импортируем редюсер для фильтра

const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Редюсер для управления контактами
    filter: filterReducer, // Редюсер для управления фильтром
  },
});
export default store; // Экспортируем хранилище
