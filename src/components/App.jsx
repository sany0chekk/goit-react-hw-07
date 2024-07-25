import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/contactsOps";
import { selectFilteredContacts } from "../redux/contacts/contactsSlice";

const App = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto p-4 flex flex-col gap-4 min-h-screen">
      <div className="p-4 bg-neutral-700 rounded-md">
        <h1 className="text-center font-bold text-2xl tracking-wider">
          Phonebook
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 flex-grow">
        <div className="md:max-w-[300px] w-full p-4 bg-neutral-700 rounded-md">
          <ContactForm />
          <SearchBox />
        </div>
        <div className="relative p-4 bg-neutral-700 rounded-md flex-grow">
          {visibleContacts.length > 0 ? (
            <ContactList />
          ) : (
            <p className="text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              List is empty
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
