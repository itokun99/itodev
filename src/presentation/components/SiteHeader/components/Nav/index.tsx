import { Link } from "@tanstack/react-router";
import React from "react";

interface NavItem {
  url: string;
  title: string;
}

interface NavProps {
  items: NavItem[];
}

function Component({ items }: NavProps) {
  return (
    <ul className="flex items-center gap-4">
      {items.map(({ url, title }, i) => (
        <li key={i}>
          <Link to={url} title={title}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const Nav = React.memo(Component);
