import { useSelector } from "react-redux";
import Contact from "./Contact";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../redux/contacts/contactsSlice";
import { FallingLines } from "react-loader-spinner";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <div className="relative w-full h-full">
      {isError ? (
        <p className="bg-red-600 p-4 rounded-md text-center text-sm font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {isError}
        </p>
      ) : visibleContacts.length > 0 ? (
        <ul className="grid gap-2">
          {visibleContacts.map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </ul>
      ) : (
        !isLoading && (
          <p className="text-lg font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            List is empty
          </p>
        )
      )}
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </div>
      )}
    </div>
  );
};

export default ContactList;
