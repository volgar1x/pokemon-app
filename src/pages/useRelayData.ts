import reactRelay, { type PreloadedQuery } from "react-relay";
import type { OperationType } from "relay-runtime";
import { usePageContext } from "vike-react/usePageContext";

const { usePreloadedQuery } = reactRelay;

export function useRelayData<T extends OperationType>(): T["response"] {
  const {
    config: { serverData, clientData, relay },
  } = usePageContext();

  if (typeof relay === "undefined") {
    throw new Error(
      "Unexpected useRelayData() call: please define +relay.ts in your route",
    );
  }

  if (import.meta.env.SSR) {
    return serverData;
  } else {
    return usePreloadedQuery(relay.query, clientData as PreloadedQuery<T>);
  }
}
