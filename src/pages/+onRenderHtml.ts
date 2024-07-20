import relayRuntime, { type OperationType } from "relay-runtime";
import * as vikeReact from "vike-react/renderer/onRenderHtml";
import { PageContextServer } from "vike/types";
import { RelayConfig } from "./+config";
import { environment } from "../relay";
import { resolveConfigValue } from "./resolveConfigValue";

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
  const serverData = await fetchQuery<T>(
    environment,
    relay.query,
    relay.variables(ctx.routeParams),
  ).toPromise();

  return {
    ...ctx,
    config: {
      ...ctx.config,
      serverData,
    },
    configEntries: {
      ...ctx.configEntries,
      title: [
        {
          configValue: getTitle(relay, serverData) ?? resolveConfigValue(ctx, ctx.config.title, ""),
          configDefinedAt: "Config title defined internally",
          configDefinedByFile: null,
        },
      ],
    },
  };
}

function getTitle<T extends OperationType>({ title }: RelayConfig<T>, serverData: T["response"]): string | undefined {
  if (typeof title === "string") {
    return title;
  } else if (typeof title === "function") {
    return title(serverData);
  }
}
