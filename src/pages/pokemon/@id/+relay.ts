import reactRelay from "react-relay";
import type { RelayPokemonQuery } from "./__generated__/RelayPokemonQuery.graphql";
import type { RelayConfig } from "../../+config";
const { graphql } = reactRelay;

export const relay: RelayConfig<RelayPokemonQuery> = {
  query: graphql`
    query RelayPokemonQuery($number: Int!) {
      getPokemonByDexNumber(number: $number) {
        num
        species
        ...PokemonDisplayFragment
      }
    }
  `,
  variables: (params) => ({
    number: parseInt(params.id, 10),
  }),
  title: ({ getPokemonByDexNumber: { species } }) => `Pokemon: ${capitalize(species)}`,
};

function capitalize(s: string): string {
  return s[0].toUpperCase() + s.substring(1);
}
