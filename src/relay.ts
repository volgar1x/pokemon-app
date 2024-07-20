import relayRuntime from "relay-runtime";

export const environment = new relayRuntime.Environment({
  network: relayRuntime.Network.create((request, variables) => {
    const promise = globalThis.fetch("https://graphqlpokemon.favware.tech/v8", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: request.text,
        variables,
      }),
    });
    return relayRuntime.Observable.from(promise.then((http) => http.json()));
  }),
  store: new relayRuntime.Store(new relayRuntime.RecordSource()),
});
