import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from "react-router";
import "./app.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="site-header">
          <div className="nav-wrap">
            <Link to="/" className="logo">SAOGEN</Link>
            <nav className="nav-menu">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <p>© SAOGEN</p>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
