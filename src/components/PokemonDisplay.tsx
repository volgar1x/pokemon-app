import reactRelay from "react-relay";
import { PokemonDisplayFragment$key } from "./__generated__/PokemonDisplayFragment.graphql";

const { graphql, useFragment } = reactRelay;

const Fragment = graphql`
  fragment PokemonDisplayFragment on Pokemon {
    species
    types { name }
  }
`;

export interface PokemonDisplayProps {
  pokemon: PokemonDisplayFragment$key;
}

export function PokemonDisplay({ pokemon: pokemonFragment }: PokemonDisplayProps) {
  const pokemon = useFragment(Fragment, pokemonFragment);

  return (
    <>
      <p>
        Pokemon{" "}
        <span style={{ textTransform: "capitalize" }}>{pokemon.species}</span>{" "}
        has types:
      </p>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.name}</li>
        ))}
      </ul>
    </>
  );
}
