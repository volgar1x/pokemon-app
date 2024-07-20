/**
 * @generated SignedSource<<14dfd13f89b096c48cae6b4982e47089>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PokemonDisplayFragment$data = {
  readonly species: string;
  readonly types: ReadonlyArray<{
    readonly name: string;
  }>;
  readonly " $fragmentType": "PokemonDisplayFragment";
};
export type PokemonDisplayFragment$key = {
  readonly " $data"?: PokemonDisplayFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PokemonDisplayFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonDisplayFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "species",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PokemonType",
      "kind": "LinkedField",
      "name": "types",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};

(node as any).hash = "1573360f4665db631d16d4d74fb8973c";

export default node;
