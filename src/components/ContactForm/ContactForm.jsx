import { Field, Form, Formik, ErrorMessage } from "formik";
import css from './ContactForm.module.css';
import { useId } from "react";
import * as Yup from "yup";

const ContactForm = ({addContact} ) => {
  const validationSchema = Yup.object().shape({
    nameUser: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    numberUser: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const contact = { 
      name: values.nameUser,
      number: values.numberUser,
    };

    addContact(contact)
    actions.resetForm();
    
  };

  return (
    <Formik 
      initialValues={{ nameUser: '', numberUser: '' }} 
      onSubmit={handleSubmit} 
      validationSchema={validationSchema}
    >
      <Form className={css.form}> 
        <label htmlFor={nameFieldId}>
          Name:
          <Field type='text' name='nameUser' id={nameFieldId} />
          <ErrorMessage name="nameUser" component="div" className={css.error} />
        </label>
        <label htmlFor={numberFieldId}>
          Number:
          <Field type='tel' name='numberUser' id={numberFieldId} />
          <ErrorMessage name="numberUser" component="div" className={css.error}  />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
