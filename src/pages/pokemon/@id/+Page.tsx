import { useEffect } from "react";
import { useRelayData } from "../../useRelayData";
import { RelayPokemonQuery } from "./__generated__/RelayPokemonQuery.graphql";

export function Page() {
  const { getPokemonByDexNumber: pokemon } = useRelayData<RelayPokemonQuery>();
  useEffect(() => {
    document.title = `Pokemon: ${capitalize(pokemon.species)}`;
  }, [pokemon.species]);

  return (
    <>
      <h1>Pokemon #{pokemon.num}</h1>
      <p>
        Pokemon{" "}
        <span style={{ textTransform: "capitalize" }}>{pokemon.species}</span>{" "}
        has types:
        <ul>
          {pokemon.types.map((type, index) => (
            <li key={index}>{type.name}</li>
          ))}
        </ul>
      </p>
    </>
  );
}

function capitalize(s: string): string {
  return s[0].toUpperCase() + s.substring(1);
}
