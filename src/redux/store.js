import { configureStore } from "@reduxjs/toolkit";

const staticData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const INITIAL_STATE = {
  contacts: {
    items: [] && staticData,
  },
  filters: {
    name: "",
  },
};

export const contactsReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export const store = configureStore({
  reducer: contactsReducer,
});
