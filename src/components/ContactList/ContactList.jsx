import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const deleteContact = (contactId) => {
    dispatch({ type: "contacts/deleteContact", payload: contactId });
  };

  return (
    <div>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          deleteContact={() => deleteContact(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
