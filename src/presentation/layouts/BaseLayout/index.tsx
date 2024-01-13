import { Link, Outlet } from "@tanstack/react-router";

export function BaseLayout() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Outlet />
    </>
  )
}

