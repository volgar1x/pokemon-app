import type { PageContext } from "vike/types";

export function resolveConfigValue<T>(ctx: PageContext, configValue: T | ((ctx: PageContext) => T) | undefined, fallbackValue: T): T {
  if (configValue instanceof Function) return configValue(ctx);
  return configValue ?? fallbackValue;
}
