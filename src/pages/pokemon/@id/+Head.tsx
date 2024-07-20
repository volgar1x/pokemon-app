import { useRelayData } from "../../useRelayData";
import { RelayPokemonQuery } from "./__generated__/RelayPokemonQuery.graphql";

export function Head() {
  const { getPokemonByDexNumber: pokemon } = useRelayData<RelayPokemonQuery>();
  return (
    <>
      <meta name="description" content={pokemon.species} />
    </>
  );
}
