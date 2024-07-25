import { useSelector } from "react-redux";
import Contact from "./Contact";
import { selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredName = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filteredName.toLocaleLowerCase())
  );

  return (
    <ul className="grid gap-2">
      {visibleContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
