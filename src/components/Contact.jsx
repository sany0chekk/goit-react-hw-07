import { FaPhoneAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/contactsOps";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className="p-4 bg-neutral-600 rounded-md flex flex-col gap-6 md:flex-row justify-between md:items-center">
      <div className="flex flex-col gap-3">
        <p className="text-base md:text-xl">{name}</p>
        <p className="flex items-center gap-2 text-sm">
          <FaPhoneAlt size="15" /> {number}
        </p>
      </div>
      <button
        onClick={() => handleDelete(id)}
        className="bg-teal-700 p-2 transition-colors hover:bg-teal-600 rounded-md w-full md:w-auto flex justify-center"
      >
        <MdDeleteForever size="25" />
      </button>
    </li>
  );
};

export default Contact;
