import React from "react";
import { Nav } from "./components";

function Component() {
  return (
    <div className="site-header fixed top-0 w-full border-b border-b-slate-300 bg-white py-4">
      <div className="site-header-container mx-auto flex max-w-screen-xl justify-between px-6">
        <div className="site-header-left">
          <div className="">
            <h1 className="text-3xl font-bold">Itodev</h1>
          </div>
        </div>
        <div className="site-header-right flex items-center">
          <Nav />
        </div>
      </div>
    </div>
  );
}

export const SiteHeader = React.memo(Component);
