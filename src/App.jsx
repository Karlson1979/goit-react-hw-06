import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

const App = () => {
  const staticData = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : staticData;
  });

  const [search, setSearch] = useState('');

  const searchUser = (event) => {
    setSearch(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = (contact) => {
    const finalContact = {
      ...contact,
      id: nanoid()
    };
    setContacts([finalContact, ...contacts]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(item => item.id !== contactId));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchUser={searchUser} searchValue={search} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
};
export default App;
