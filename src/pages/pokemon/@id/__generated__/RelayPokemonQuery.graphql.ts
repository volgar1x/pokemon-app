/**
 * @generated SignedSource<<af0fb1c3fa103d47c5c1c0299c4a027f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelayPokemonQuery$variables = {
  number: number;
};
export type RelayPokemonQuery$data = {
  readonly getPokemonByDexNumber: {
    readonly num: number;
    readonly species: string;
    readonly " $fragmentSpreads": FragmentRefs<"PokemonDisplayFragment">;
  };
};
export type RelayPokemonQuery = {
  response: RelayPokemonQuery$data;
  variables: RelayPokemonQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "number"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "number",
    "variableName": "number"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "num",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "species",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayPokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "getPokemonByDexNumber",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonDisplayFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayPokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "getPokemonByDexNumber",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7579a6949fa7656074b9dfd835ca2d7a",
    "id": null,
    "metadata": {},
    "name": "RelayPokemonQuery",
    "operationKind": "query",
    "text": "query RelayPokemonQuery(\n  $number: Int!\n) {\n  getPokemonByDexNumber(number: $number) {\n    num\n    species\n    ...PokemonDisplayFragment\n  }\n}\n\nfragment PokemonDisplayFragment on Pokemon {\n  species\n  types {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "20bdeee4094e6fae9f976b689aafed53";

export default node;
