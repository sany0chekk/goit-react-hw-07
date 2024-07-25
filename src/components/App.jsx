import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";

const App = () => {
  const contacts = useSelector(selectContacts);

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
        <div className=" p-4 bg-neutral-700 rounded-md flex-grow">
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="md:text-xl">List is empty!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
