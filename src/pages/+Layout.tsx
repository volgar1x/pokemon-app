import { Suspense } from "react";
import { Link } from "../components/Link";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <nav style={{ width: "20em" }}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            Pokemon
            <ol>
              <li>
                <Link href="/pokemon/1">Bulbasaur</Link>
              </li>
              <li>
                <Link href="/pokemon/4">Charmander</Link>
              </li>
            </ol>
          </li>
        </ul>
      </nav>

      <main style={{ flex: 1 }}>
        <Suspense fallback={<p>Loading...</p>}>
          {children}
        </Suspense>
      </main>
    </div>
  );
}
