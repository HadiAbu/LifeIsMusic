import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const Searchbar = () => {
  const { search, setSearch } = useState('');
  const handleSubmit = () => {};
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:primary-text-color"
    >
      <label htmlFor="search-field" className="sr-only">
        Search songs..
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base primary-text-color p-4"
          id="search-field"
          autoComplete="off"
          placeholder="Search song.."
          type="search"
          value={search}
          onChange={setSearch}
        />
      </div>
    </form>
  );
};

export default Searchbar;
