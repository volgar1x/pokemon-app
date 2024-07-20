import relayRuntime, { type OperationType } from "relay-runtime";
import * as vikeReact from "vike-react/renderer/onRenderHtml";
import { PageContextServer } from "vike/types";
import { RelayConfig } from "./+config";
import { environment } from "../relay";

const { fetchQuery } = relayRuntime;

export async function onRenderHtml(ctx: PageContextServer) {
  const { relay } = ctx.config;
  if (typeof relay !== "undefined") {
    ctx = await loadGraphql(relay, ctx);
  }
  return await vikeReact.onRenderHtml(ctx);
}

async function loadGraphql<T extends OperationType>(
  relay: RelayConfig<T>,
  ctx: PageContextServer,
): Promise<PageContextServer> {
  console.log(relay.variables(ctx.routeParams));
  return {
    ...ctx,
    config: {
      ...ctx.config,
      serverData: await fetchQuery<T>(
        environment,
        relay.query,
        relay.variables(ctx.routeParams),
      ).toPromise(),
    },
  };
}
