/**
 * @generated SignedSource<<2bd50e09727964221767e4a9196ac380>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RelayPokemonQuery$variables = {
  number: number;
};
export type RelayPokemonQuery$data = {
  readonly getPokemonByDexNumber: {
    readonly num: number;
    readonly species: string;
    readonly types: ReadonlyArray<{
      readonly name: string;
    }>;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "number",
        "variableName": "number"
      }
    ],
    "concreteType": "Pokemon",
    "kind": "LinkedField",
    "name": "getPokemonByDexNumber",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "num",
        "storageKey": null
      },
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayPokemonQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayPokemonQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f4a785d5be6904d7772ed5285a6bd033",
    "id": null,
    "metadata": {},
    "name": "RelayPokemonQuery",
    "operationKind": "query",
    "text": "query RelayPokemonQuery(\n  $number: Int!\n) {\n  getPokemonByDexNumber(number: $number) {\n    num\n    species\n    types {\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3c96f9f8648c7a4b693edfde7c8c038b";

export default node;
