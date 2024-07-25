import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div>
      <p className="text-sm mb-1">Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
        className="w-full bg-neutral-600 border border-neutral-500 rounded-md h-8 outline-none transition-colors focus:border-neutral-400 px-2 text-sm"
      />
    </div>
  );
};

export default SearchBox;
