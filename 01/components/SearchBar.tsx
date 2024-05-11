
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string, filter: string) => void;
  getSuggestions: (query: string) => Promise<string[]>;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, getSuggestions }) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const suggestions = await getSuggestions(value);
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query, filter);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={query}
        onChange={handleInputChange}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mr-2"
      />
      <select
        value={filter}
        onChange={handleFilterChange}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mr-2"
      >
        <option value="all">All</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        {/* Add more filter options as needed */}
      </select>
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border rounded-md shadow-md">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(suggestion);
                setSuggestions([]);
              }}
            >
              {suggestion}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

// import { useState } from "react";

// interface SearchBarProps {
//   onSearch: (query: string, filter: string) => void;
//   getSuggestions: (query: string) => Promise<string[]>;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch, getSuggestions }) => {
//   const [query, setQuery] = useState("");
//   const [filter, setFilter] = useState("all");
//   const [suggestions, setSuggestions] = useState<string[]>([]);

//   const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value) {
//       const suggestions = await getSuggestions(value);
//       setSuggestions(suggestions);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setFilter(e.target.value);
//   };

//   const handleSearch = () => {
//     onSearch(query, filter);
//   };

//   return (
//     <div className="flex justify-center my-4">
//       <input
//         type="text"
//         placeholder="Search Pokemon..."
//         value={query}
//         onChange={handleInputChange}
//         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mr-2"
//       />
//       <select
//         value={filter}
//         onChange={handleFilterChange}
//         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mr-2"
//       >
//         <option value="all">All</option>
//         <option value="fire">Fire</option>
//         <option value="water">Water</option>
//         <option value="bug">Bug</option>
//         <option value="dragon">Dragon</option>
//         <option value="electric">Electric</option>
//         <option value="fairy">Fairy</option>
//         <option value="normal">Normal</option>
//         <option value="psychic">Psychic</option>
//         <option value="fighting">Fighting</option>
//         <option value="water">Water</option>
//         <option value="fire">Fire</option>
//         <option value="flying">Flying</option>
//         <option value="ice">Ice</option>
//         <option value="poison">Poison</option>
//         <option value="rock">Rock</option>
//         <option value="grass">Grass</option>
//         <option value="ground">Ground</option>
//         {/* Add more filter options as needed */}
//       </select>
//       <button
//         onClick={handleSearch}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Search
//       </button>
//       {suggestions.length > 0 && (
//         <ul className="absolute bg-white border rounded-md shadow-md">
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => {
//                 setQuery(suggestion);
//                 setSuggestions([]);
//               }}
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

// // import { useState } from "react";

// // interface SearchBarProps {
// //   onSearch: (query: string, filter: string) => void;
// // }

// // const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
// //   const [query, setQuery] = useState("");
// //   const [filter, setFilter] = useState("all"); // Default filter value

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setQuery(e.target.value);
// //   };

// //   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     setFilter(e.target.value);
// //   };

// //   const handleSearch = () => {
// //     onSearch(query, filter);
// //   };

// //   return (
// //     <div className="flex justify-center my-4">
// //       <input
// //         type="text"
// //         placeholder="Search Pokemon..."
// //         value={query}
// //         onChange={handleInputChange}
// //         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mr-2"
// //       />
// //       <select
// //         value={filter}
// //         onChange={handleFilterChange}
// //         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mr-2"
// //       >
// //         <option value="all">All</option>
// //         <option value="fire">Fire</option>
// //         <option value="water">Water</option>
// //         <option value="bug">Bug</option>
// //         <option value="dragon">Dragon</option>
// //         <option value="electric">Electric</option>
// //         <option value="fairy">Fairy</option>
// //         <option value="normal">Normal</option>
// //         <option value="psychic">Psychic</option>
// //         <option value="fighting">Fighting</option>
// //         <option value="water">Water</option>
// //         <option value="fire">Fire</option>
// //         <option value="flying">Flying</option>
// //         <option value="ice">Ice</option>
// //         <option value="poison">Poison</option>
// //         <option value="rock">Rock</option>
// //         <option value="grass">Grass</option>
// //         <option value="ground">Ground</option>
// //         {/* Add more filter options as needed */}
// //       </select>
// //       <button
// //         onClick={handleSearch}
// //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// //       >
// //         Search
// //       </button>
// //     </div>
// //   );
// // };

// // export default SearchBar;
