// pokemon.service.ts
import { useState, useEffect } from "react";
import { Pokemon } from "@/types";

const fetchPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    const pokemonList = await Promise.all(
      data.results.map(async (pokemon: { name: string; url: string }) => {
        const id = pokemon.url.split("/")[6];
        const response = await fetch(pokemon.url);
        const pokemonData = await response.json();
        return {
          id: id,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          type: pokemonData.types
            .map((type: { type: { name: string } }) => type.type.name)
            .join(", "),
        };
      })
    );

    return pokemonList;
  } catch (e) {
    console.error("Error fetching Pokemon data");
  }
};

const filterPokemons = (pokemons: Pokemon[], query: string, filter: string) => {
  if (query === "" && filter === "all") {
    return pokemons;
  } else {
    return pokemons.filter(
      (pokemon) =>
        (pokemon.name.toLowerCase().includes(query.toLowerCase()) ||
          query === "") &&
        (filter === "all" || pokemon.type.toLowerCase() === filter)
    );
  }
};

export { fetchPokemons, filterPokemons };
