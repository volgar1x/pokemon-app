import reactRelay from "react-relay";
import { environment } from "../relay";

const { RelayEnvironmentProvider } = reactRelay;

export function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
