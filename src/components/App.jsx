import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/contactsOps";

const App = () => {
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
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;
