// src/redux/contactsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Экспортируем действия и редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer; // Экспорт редюсера по умолчанию
