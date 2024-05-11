"use client";

import React, { useState, useEffect } from "react";
import PokemonList from "@/components/pokemonlist/page";
import { filterPokemons } from "@/services/pokemon.service";
import { Pokemon as PokemonType } from "@/types";
import SearchBar from "@/components/SearchBar";

interface Pokemon {
  id: string;
  name: string;
  image: string;
}

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);

  const fetchPokemonsData = async (offset: number, limit: number) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();

    const pokemonList = await Promise.all(
      data.results.map(async (pokemon: { name: string; url: string }) => {
        const id = pokemon.url.split("/")[6];
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await response.json();
        return {
          id: id,
          name: pokemon.name,
          image: pokemonData.sprites.front_default, // Use the front_default sprite for the image
        };
      })
    );

    return pokemonList;
  };

  const fetchPokemons = async () => {
    setLoading(true);
    const pokemonList = await fetchPokemonsData((page - 1) * 10, 10);
    setPokemons((prevPokemons) => [...prevPokemons, ...pokemonList]);
    setLoading(false);
  };

  const handleSearch = (query: string, filter: string) => {
    setSearchQuery(query);
    setFilter(filter);
    const filtered = filterPokemons(pokemons, query, filter);
    setFilteredPokemons(filtered);
  };

  const handleGetSuggestions = async (query: string): Promise<string[]> => {
    // Implement your suggestion logic here
    // For example, you can fetch suggestions from an API or use a predefined list
    return [];
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <SearchBar
        onSearch={handleSearch}
        getSuggestions={handleGetSuggestions}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PokemonList
          pokemons={filteredPokemons.length > 0 ? filteredPokemons : pokemons}
        />
      )}
      <button
        onClick={handleLoadMore}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Load More
      </button>
    </div>
  );
};

export default Home;

// "use client";

// import React, { useState, useEffect } from "react";
// import PokemonList from "@/components/pokemonlist/page";
// import { filterPokemons } from "@/services/pokemon.service";
// import { Pokemon as PokemonType } from "@/types";
// import SearchBar from "@/components/SearchBar";

// interface Pokemon {
//   name: string;
//   url: string;
// }

// const Home = () => {
//   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filter, setFilter] = useState("all");
//   const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
//   const [page, setPage] = useState(1);

//   const fetchPokemonsData = async (offset: number, limit: number) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
//     const data = await response.json();

//     const pokemonList = await Promise.all(data.results.map(async (pokemon: { name: string; url: string }) => {
//       const id = pokemon.url.split("/")[6];
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//       const pokemonData = await response.json();
//       return {
//         id: id,
//         name: pokemon.name,
//         image: pokemonData.sprites.front_default,
//       };
//     })).then((pokemonList) => {
//       return pokemonList;
//     });

//     return pokemonList;
//   };

//   const fetchPokemons = async () => {
//     setLoading(true);
//     const pokemonList = await fetchPokemonsData((page - 1) * 10, 10);
//     setPokemons((prevPokemons) => [...prevPokemons, ...pokemonList]);
//     setLoading(false);
//   };

//   const handleSearch = () => {
//     const filtered = filterPokemons(pokemons, searchQuery, filter);
//     setFilteredPokemons(filtered);
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   useEffect(() => {
//     fetchPokemons();
//   }, [page]);

//   useEffect(() => {
//     handleSearch();
//   }, [searchQuery, filter, pokemons]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search Pokemon..."
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4"
//       />
//       <select
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4"
//       >
//         <option value="all">All</option>
//         <option value="fire">Fire</option>
//         <option value="water">Water</option>
//         {/* Add more filter options as needed */}
//       </select>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <PokemonList pokemons={filteredPokemons} />
//       )}
//       <button onClick={handleLoadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//         Load More
//       </button>
//     </div>
//   );
// };

// export default Home;

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import PokemonList from "@/components/pokemonlist/page";
// // import { filterPokemons } from "@/services/pokemon.service";
// // import { Pokemon } from "@/types";

// // interface Pokemon {
// //   name: string;
// //   url: string;
// // }

// // const Home = () => {
// //   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [filter, setFilter] = useState("all");
// //   const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
// //   const [page, setPage] = useState(1);

// //   // const fetchPokemonsData = async (offset: number, limit: number) => {
// //   //   const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
// //   //   const data = await response.json();
// //   //   return data.results as Pokemon[];
// //   // };
// //   const fetchPokemonsData = async (offset: number, limit: number) => {
// //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
// //     const data = await response.json();

// //     const pokemonList = await Promise.all(data.results.map(async (pokemon: { name: string; url: string }) => {
// //       const id = pokemon.url.split("/")[6];
// //       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
// //       const pokemonData = await response.json();
// //       return {
// //         id: id,
// //         name: pokemon.name,
// //         image: pokemonData.sprites.front_default, // Use the front_default sprite for the image
// //       };
// //     }));

// //     return pokemonList;
// //   };

// //   const fetchPokemons = async () => {
// //     setLoading(true);
// //     const pokemonList = await fetchPokemonsData((page - 1) * 10, 10);
// //     setPokemons((prevPokemons) => [...prevPokemons, ...pokemonList]);
// //     setLoading(false);
// //   };

// //   const handleSearch = () => {
// //     const filtered = filterPokemons(pokemons, searchQuery, filter);
// //     setFilteredPokemons(filtered);
// //   };

// //   const handleLoadMore = () => {
// //     setPage(page + 1);
// //   };

// //   useEffect(() => {
// //     fetchPokemons();
// //   }, [page]);

// //   useEffect(() => {
// //     handleSearch();
// //   }, [searchQuery, filter, pokemons]);

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         placeholder="Search Pokemon..."
// //         onChange={(e) => setSearchQuery(e.target.value)}
// //         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4"
// //       />
// //       <select
// //         value={filter}
// //         onChange={(e) => setFilter(e.target.value)}
// //         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4"
// //       >
// //         <option value="all">All</option>
// //         <option value="fire">Fire</option>
// //         <option value="water">Water</option>
// //         {/* Add more filter options as needed */}
// //       </select>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <PokemonList pokemons={filteredPokemons} />
// //       )}
// //       <button onClick={handleLoadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
// //         Load More
// //       </button>
// //     </div>
// //   );
// // };

// // export default Home;

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import PokemonList from "@/components/pokemonlist/page";
// // import { fetchPokemons, filterPokemons } from "@/services/pokemon.service";

// // const Home = () => {
// //   const [pokemons, setPokemons] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [filter, setFilter] = useState("all");
// //   const [filteredPokemons, setFilteredPokemons] = useState([]);
// //   const [page, setPage] = useState(1);

// //   const fetchPokemonsData = async (offset, limit) => {
// //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
// //     const data = await response.json();
// //     return data.results;
// //   };

// //   const fetchPokemons = async () => {
// //     setLoading(true);
// //     const pokemonList = await fetchPokemonsData((page - 1) * 10, 10);
// //     setPokemons([...pokemons, ...pokemonList]);
// //     setLoading(false);
// //   };

// //   const handleSearch = () => {
// //     const filtered = filterPokemons(pokemons, searchQuery, filter);
// //     setFilteredPokemons(filtered);
// //   };

// //   const handleLoadMore = () => {
// //     setPage(page + 1);
// //   };

// //   useEffect(() => {
// //     fetchPokemons();
// //   }, [page]);

// //   useEffect(() => {
// //     handleSearch();
// //   }, [searchQuery, filter, pokemons]);

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         placeholder="Search Pokemon..."
// //         onChange={(e) => setSearchQuery(e.target.value)}
// //         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4"
// //       />
// //       <select
// //         value={filter}
// //         onChange={(e) => setFilter(e.target.value)}
// //         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4"
// //       >
// //         <option value="all">All</option>
// //         <option value="fire">Fire</option>
// //         <option value="water">Water</option>
// //         {/* Add more filter options as needed */}
// //       </select>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <PokemonList pokemons={filteredPokemons} />
// //       )}
// //       <button onClick={handleLoadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
// //         Load More
// //       </button>
// //     </div>
// //   );
// // };

// // export default Home;
// // import React, { useState, useEffect } from "react";
// // import { Pokemon } from "@/types";
// // import PokemonList from "@/components/pokemonlist/page";
// // import SearchBar from "@/components/SearchBar";
// // import { fetchPokemons, filterPokemons } from "@/services/pokemon.service";

// // const Home = () => {
// //   const [pokemons, setPokemons] = useState<{ name: string }[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [page, setPage] = useState(1);

// //   const fetchPokemons = async (offset: number, limit: number) => {
// //     const response = await fetch(
// //       `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
// //     );
// //     const data = await response.json();
// //     return data.results;
// //   };

// //   const loadMorePokemons = async () => {
// //     setLoading(true);
// //     const newPokemons = await fetchPokemons((page - 1) * 10, 10);
// //     setPokemons([...pokemons, ...newPokemons]);
// //     setPage(page + 1);
// //     setLoading(false);
// //   };

// //   useEffect(() => {
// //     const fetchInitialPokemons = async () => {
// //       const initialPokemons = await fetchPokemons(0, 50);
// //       setPokemons(initialPokemons);
// //       setLoading(false);
// //     };

// //     fetchInitialPokemons();
// //   }, []);

// //   return (
// //     <div>
// //       <SearchBar
// //         onSearch={(query) => console.log(query)}
// //         getSuggestions={() => Promise.resolve([])}
// //       />
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <>
// //           <ul>
// //             {pokemons.map((pokemon, index) => (
// //               <li key={index}>{pokemon.name}</li>
// //             ))}
// //           </ul>
// //           <button onClick={loadMorePokemons}>Load More</button>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { Pokemon } from "@/types";
// // import PokemonList from "@/components/pokemonlist/page";
// // import SearchBar from "@/components/SearchBar";
// // import { fetchPokemons, filterPokemons } from "@/services/pokemon.service";

// // const Home = () => {
// //   const [pokemons, setPokemons] = useState<{ name: string }[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [page, setPage] = useState(1);

// //   const fetchPokemons = async (offset: number, limit: number) => {
// //     const response = await fetch(
// //       `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
// //     );
// //     const data = await response.json();
// //     return data.results;
// //   };

// //   const loadMorePokemons = async () => {
// //     setLoading(true);
// //     const newPokemons = await fetchPokemons((page - 1) * 10, 10);
// //     setPokemons([...pokemons, ...newPokemons]);
// //     setPage(page + 1);
// //     setLoading(false);
// //   };

// //   useEffect(() => {
// //     const fetchInitialPokemons = async () => {
// //       const initialPokemons = await fetchPokemons(0, 50);
// //       setPokemons(initialPokemons);
// //       setLoading(false);
// //     };

// //     fetchInitialPokemons();
// //   }, []);

// //   return (
// //     <div>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <>
// //           <ul>
// //             {pokemons.map((pokemon, index) => (
// //               <li key={index}>{pokemon.name}</li>
// //             ))}
// //           </ul>
// //           <button onClick={loadMorePokemons}>Load More</button>
// //         </>
// //       )}
// //     </div>
// //   );
// // };
// //export default Home;

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { Pokemon } from "@/types";
// // import PokemonList from "@/components/pokemonlist/page";
// // import SearchBar from "@/components/SearchBar";
// // import { fetchPokemons, filterPokemons } from "@/services/pokemon.service";

// // const Home: React.FC = () => {
// //   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [searchQuery, setSearchQuery] = useState<string>("");
// //   const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const pokemonList = await fetchPokemons();
// //       setPokemons(pokemonList || []); // Ensure pokemonList is not undefined
// //       setLoading(false);
// //     };

// //     fetchData();

// //     return () => {
// //       // Cleanup logic here if needed
// //     };
// //   }, []);

// //   useEffect(() => {
// //     if (searchQuery === "") {
// //       setFilteredPokemons(pokemons);
// //     } else {
// //       const filtered = filterPokemons(pokemons, searchQuery, "all");
// //       setFilteredPokemons(filtered || []); // Ensure filtered is not undefined
// //     }
// //   }, [searchQuery, pokemons]);

// //   const handleSearch = (query: string, filter: string) => {
// //     setSearchQuery(query);
// //   };

// //   return (
// //     <div>
// //       <SearchBar
// //         onSearch={handleSearch}
// //         getSuggestions={() => Promise.resolve([])}
// //       />
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <PokemonList pokemons={filteredPokemons} />
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;

// // import React, { useState, useEffect } from "react";
// // import { Pokemon } from "@/types";
// // import PokemonList from "@/components/pokemonlist/page";
// // import SearchBar from "@/components/SearchBar";
// // import { fetchPokemons, filterPokemons } from "@/services/pokemon.service";

// // const Home: React.FC = () => {
// //   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [searchQuery, setSearchQuery] = useState<string>("");
// //   const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const pokemonList = await fetchPokemons();
// //       setPokemons(pokemonList);
// //       setLoading(false);
// //     };

// //     fetchData();

// //     return () => {
// //       // Cleanup logic here if needed
// //     };
// //   }, []);

// //   useEffect(() => {
// //     if (searchQuery === "") {
// //       setFilteredPokemons(pokemons);
// //     } else {
// //       const filtered = filterPokemons(pokemons, searchQuery, "all");
// //       setFilteredPokemons(filtered);
// //     }
// //   }, [searchQuery, pokemons]);

// //   const handleSearch = (query: string, filter: string) => {
// //     setSearchQuery(query);
// //   };

// //   return (
// //     <div>
// //       <SearchBar onSearch={handleSearch} />
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <PokemonList pokemons={filteredPokemons} />
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;

// // "use client";

// // import { useEffect, useState } from "react";
// // import { Pokemon } from "@/types";
// // import PokemonList from "@/components/pokemonlist/page";
// // import SearchBar from "@/components/SearchBar"; // Import the SearchBar component

// // export default function Home() {
// //   const [pokemons, setPokemons] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [filteredPokemons, setFilteredPokemons] = useState([]);

// //   const handleSearch = (query: string, filter: string) => {
// //     if (query === "" && filter === "all") {
// //       setFilteredPokemons(pokemons);
// //     } else {
// //       const filtered = pokemons.filter(
// //         (pokemon) =>
// //           (pokemon.name.toLowerCase().includes(query.toLowerCase()) ||
// //             query === "") &&
// //           (filter === "all" || pokemon.type.toLowerCase() === filter)
// //       );
// //       setFilteredPokemons(filtered);
// //     }
// //   };

// //   useEffect(() => {
// //     const fetchPokemons = async () => {
// //       try {
// //         const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
// //         const data = await response.json();
// //         const pokemonList = await Promise.all(data.results.map(async (pokemon: { name: string; url: string }) => {
// //           const id = pokemon.url.split("/")[6];
// //           const response = await fetch(pokemon.url);
// //           const pokemonData = await response.json();
// //           return {
// //             id: id,
// //             name: pokemon.name,
// //             image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
// //             type: pokemonData.types.map((type: { type: { name: string } }) => type.type.name).join(", "),
// //           };
// //         });

// //         setPokemons(pokemonList);
// //         setLoading(false);
// //       } catch (e) {
// //         console.error("Error fetching Pokemon data");
// //         setLoading(false);
// //       }
// //     };

// //     fetchPokemons();

// //     // Return a cleanup function or nothing (void)
// //     return () => {
// //       // Cleanup logic here if needed
// //     };
// //   }, []); // Empty dependency array to run effect only once

// //   useEffect(() => {
// //     if (searchQuery === "") {
// //       setFilteredPokemons(pokemons);
// //     } else {
// //       const filtered = pokemons.filter((pokemon) =>
// //         pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //       setFilteredPokemons(filtered);
// //     }
// //   }, [searchQuery, pokemons]);

// //   return (
// //     <div>
// //       <SearchBar onSearch={setSearchQuery} />{" "}
// //       {/* Pass setSearchQuery as the onSearch prop */}
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <PokemonList pokemons={filteredPokemons} />
// //       )}
// //     </div>
// //   );
// // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { Pokemon } from "@/types";
// // // import PokemonList from "@/components/pokemonlist/page";

// // // export default function Home() {
// // //   const [pokemons, setPokemons] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [filteredPokemons, setFilteredPokemons] = useState([]);

// // //   useEffect(() => {
// // //     const fetchPokemons = async () => {
// // //       try {
// // //         const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
// // //         const data = await response.json();
// // //         const pokemonList = data.results.map(
// // //           (pokemon: { name: string; url: string }) => {
// // //             const id = pokemon.url.split("/")[6];
// // //             return {
// // //               id: id,
// // //               name: pokemon.name,
// // //               image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
// // //             };
// // //           }
// // //         );

// // //         setPokemons(pokemonList);
// // //         setLoading(false);
// // //       } catch (e) {
// // //         console.error("Error fetching Pokemon data");
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchPokemons();

// // //     // Return a cleanup function or nothing (void)
// // //     return () => {
// // //       // Cleanup logic here if needed
// // //     };
// // //   }, []); // Empty dependency array to run effect only once

// // //   useEffect(() => {
// // //     if (searchQuery === "") {
// // //       setFilteredPokemons(pokemons);
// // //     } else {
// // //       const filtered = pokemons.filter((pokemon) =>
// // //         pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
// // //       );
// // //       setFilteredPokemons(filtered);
// // //     }
// // //   }, [searchQuery, pokemons]);

// // //   return (
// // //     <div>
// // //       <input
// // //         type="text"
// // //         placeholder="Search Pokemon..."
// // //         onChange={(e) => setSearchQuery(e.target.value)}
// // //         className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4"
// // //       />
// // //       {loading ? (
// // //         <p>Loading...</p>
// // //       ) : (
// // //         <PokemonList pokemons={filteredPokemons} />
// // //       )}
// // //     </div>
// // //   );
// // // }
