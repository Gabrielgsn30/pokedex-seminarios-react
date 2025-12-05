import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../utils/api-fetch";
import { formatPokemonData } from "../utils/pokemon-helper";

const usePokemons = (type) => {
    const { data } = useQuery({
        queryKey: ['pokemons', type],
        queryFn: async () => {
            const { pokemon: pokemonList } = await apiFetch(`/type/${ type }`);
            
            const pokemons = await Promise.all(
                pokemonList.map(async ({ pokemon }) => {
                    const res = await fetch(pokemon.url);
                    const data = await res.json();

                    return formatPokemonData(data);
                })
            );
             //   return pokemons;
            // 🔥 FILTRO POR GERAÇÃO 1 (até o ID 151)
            const filtered = pokemons.filter(p => p.id <= 151);
            // pokemons.filter(p => p.id >= start && p.id <= end);
            return filtered;
        }
    });

    return data;
};

export default usePokemons;