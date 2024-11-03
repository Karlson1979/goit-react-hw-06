// redux/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "", // Начальное значение фильтра
  },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload; // Устанавливаем новое значение фильтра
    },
  },
});

export const { setFilter } = filterSlice.actions; // Экспортируем действие
export default filterSlice.reducer; // Экспортируем редюсер
