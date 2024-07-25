import { useId } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/contactsOps";

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required!")
      .min(3, "Too short!")
      .max(50, "Name must be at most 50 characters!")
      .test(
        "trim",
        "Name cannot be only spaces!",
        (value) => value.trim() !== ""
      ),
    number: Yup.string()
      .required("Required!")
      .matches(
        /^\+380-\d{2}-\d{3}-\d{2}-\d{2}$/,
        "Number must be in the format +380-67-000-00-00"
      ),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-4 mb-16">
        <div className="flex flex-col">
          <label htmlFor={nameFieldId} className="text-sm">
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className="w-full bg-neutral-600 border border-neutral-500 rounded-md h-8 outline-none transition-colors focus:border-neutral-400 px-2 text-sm"
          />
          <ErrorMessage
            name="name"
            component="span"
            className="text-red-600 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={numberFieldId} className="text-sm">
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className="w-full bg-neutral-600 border border-neutral-500 rounded-md h-8 outline-none transition-colors focus:border-neutral-400 px-2 text-sm"
          />
          <ErrorMessage
            name="number"
            component="span"
            className="text-red-600 mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-700 transition-colors hover:bg-teal-600 p-2 rounded-md"
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
