import * as vikeReact from "vike-react/renderer/onRenderClient";
import { PageContextClient } from "vike/types";
import reactRelay from "react-relay";
import type { OperationType } from "relay-runtime";
import type { RelayConfig } from "./+config";
import { environment } from "../relay";

const { loadQuery } = reactRelay;

export function onRenderClient(ctx: PageContextClient) {
  const { relay } = ctx.config;
  if (typeof relay !== "undefined") {
    ctx = loadGraphql(relay, ctx);
  }
  vikeReact.onRenderClient(ctx);
}

function loadGraphql<T extends OperationType>(
  relay: RelayConfig<T>,
  ctx: PageContextClient,
): PageContextClient {
  console.log(relay.variables(ctx.routeParams));
  return {
    ...ctx,
    config: {
      ...ctx.config,
      clientData: loadQuery<T>(
        environment,
        relay.query,
        relay.variables(ctx.routeParams),
      ),
    },
  };
}
