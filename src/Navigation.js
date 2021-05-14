import * as React from "react";
import "./Navigation.css";

export default function Navigation({ children }) {
  return (
    <nav className="Navigation">
      <a className="NavigationActive" href="">
        {children}
      </a>
    </nav>
  );
}
