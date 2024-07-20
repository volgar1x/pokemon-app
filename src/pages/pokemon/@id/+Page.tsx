import { useEffect } from "react";
import { useRelayData } from "../../useRelayData";
import { RelayPokemonQuery } from "./__generated__/RelayPokemonQuery.graphql";
import { PokemonDisplay } from "../../../components/PokemonDisplay";

export function Page() {
  const { getPokemonByDexNumber: pokemon } = useRelayData<RelayPokemonQuery>();
  useEffect(() => {
    document.title = `Pokemon: ${capitalize(pokemon.species)}`;
  }, [pokemon.species]);

  return (
    <>
      <h1>Pokemon #{pokemon.num}</h1>
      <PokemonDisplay pokemon={pokemon} />
    </>
  );
}

function capitalize(s: string): string {
  return s[0].toUpperCase() + s.substring(1);
}
