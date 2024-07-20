import * as vikeReact from "vike-react/renderer/onRenderClient";
import { PageContextClient } from "vike/types";
import reactRelay from "react-relay";
import relayRuntime from "relay-runtime";
import type { OperationType } from "relay-runtime";
import type { RelayConfig } from "./+config";
import { environment } from "../relay";
import { resolveConfigValue } from "./resolveConfigValue";

const { loadQuery } = reactRelay;
const { fetchQuery } = relayRuntime;

export function onRenderClient(ctx: PageContextClient) {
  const { relay } = ctx.config;
  if (typeof relay !== "undefined") {
    ctx = loadGraphql(relay, ctx);
  }

  vikeReact.onRenderClient(ctx);
  setDocumentTitle(ctx, resolveConfigValue(ctx, ctx.config.title, ""));
}

function loadGraphql<T extends OperationType>(
  { query, variables }: RelayConfig<T>,
  ctx: PageContextClient,
): PageContextClient {
  const clientData = loadQuery<T>(
    environment,
    query,
    variables(ctx.routeParams),
  );
  return {
    ...ctx,
    config: {
      ...ctx.config,
      clientData,
    },
  };
}

function setDocumentTitle({ config: { relay, clientData }, routeParams }: PageContextClient, fallbackTitle: string) {
  if (!relay?.title || !clientData) {
    document.title = fallbackTitle;
    return;
  }
  const { query, title } = relay;
  if (typeof title === "string") {
    document.title = title;
    return;
  }

  const source = clientData?.source?.map((response) => {
    if (response && !(response instanceof Array)) {
      return response.data;
    }
    return null;
  }) ?? fetchQuery(environment, query, relay.variables(routeParams));

  source.toPromise().then((response) => {
    if (response) {
      document.title = title(response);
    } else {
      document.title = fallbackTitle;
    }
  }, (error) => {
    console.error(error);
    document.title = fallbackTitle;
  });
}
