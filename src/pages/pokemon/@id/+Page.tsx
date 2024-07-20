import { useRelayData } from "../../useRelayData";
import { RelayPokemonQuery } from "./__generated__/RelayPokemonQuery.graphql";
import { PokemonDisplay } from "../../../components/PokemonDisplay";

export function Page() {
  const { getPokemonByDexNumber: pokemon } = useRelayData<RelayPokemonQuery>();

  return (
    <>
      <h1>Pokemon #{pokemon.num}</h1>
      <PokemonDisplay pokemon={pokemon} />
    </>
  );
}

