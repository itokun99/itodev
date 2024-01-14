import { Link } from "@tanstack/react-router";
import React from "react";

function Component() {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export const Nav = React.memo(Component);
