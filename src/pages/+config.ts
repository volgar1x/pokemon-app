import type { Config } from "vike/types";
import type { PreloadedQuery } from "react-relay";
import type { OperationType, GraphQLTaggedNode } from "relay-runtime";
import vikeReact from "vike-react/config";

export default {
  title: "The Pokemon App",
  extends: vikeReact,
  meta: {
    relay: { env: { server: true, client: true } },
    clientData: { env: { server: false, client: true } },
    serverData: { env: { server: true, client: false } },
  },
} satisfies Config;

export interface RelayConfig<Query extends OperationType = OperationType> {
  query: GraphQLTaggedNode;
  variables: (params: Record<string, string>) => Query["variables"];
}

declare global {
  namespace Vike {
    interface Config {
      relay?: RelayConfig | undefined;
      clientData?: PreloadedQuery<OperationType> | undefined;
      serverData?: unknown | undefined;
    }
  }
}
