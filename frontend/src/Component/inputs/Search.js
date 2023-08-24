import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="hidden  px-4 md:mt-0  py-2  md:px-7 text-white sm:flex gap-3 rounded-xl border">
      <FaSearch className="mt-1.5" />{" "}
      <input
        type="text"
        placeholder="Search items, collections & accounts"
        className="md:w-[300px] bg-transparent outline-none"
      />
    </div>
  );
};

export default Search;
