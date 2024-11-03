import { useSelector } from "react-redux";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  const searchValue = useSelector((state) => state.filter.value); // Получаем значение фильтра из Redux
  const contacts = useSelector((state) => state.contacts.items); // Получаем контакты

  // Фильтруем контакты на основе значения фильтра
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />{" "}
      {/* Передаем отфильтрованные контакты */}
    </div>
  );
};

export default App;
