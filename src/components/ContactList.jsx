import { useSelector } from "react-redux";
import Contact from "./Contact";
import { selectFilteredContacts } from "../redux/contacts/contactsSlice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className="grid gap-2">
      {visibleContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
