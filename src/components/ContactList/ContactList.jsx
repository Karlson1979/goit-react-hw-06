import Contact from "../Contact/Contact"


 const ContactList = ({contacts,deleteContact}) => {
  return (
    <div>
      {contacts.map(contact=>(
        <Contact key={contact.id}
         name={contact.name} 
         number={contact.number}
         id={contact.id}
         deleteContact={deleteContact}
         />
      )) }  
       

    </div>
  )
}
export default ContactList