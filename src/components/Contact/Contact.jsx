
import { IoIosContact } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import css from './contact.module.css'
const Contact = ({name,number,id, deleteContact}) => {
  
  return (
    <div className={css.contact}>
        <p> <IoIosContact /> name: {name}</p>
        <p> <BsTelephoneFill /> number: {number}</p>
        <button type='button' className={css.contactBtn} onClick={()=>deleteContact(id)}><MdDelete /> Delete</button>
    </div>
  )
}
export default Contact