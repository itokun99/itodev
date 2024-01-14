import React from "react";

function Component() {
  return (
    <div className="flex items-center gap-4">
      <img
        src="https://avatars.githubusercontent.com/u/45938169?v=4"
        alt=""
        className="h-14 w-14 rounded-full"
      />
      <div className="">
        <h1 className="text-3xl font-bold">ITODEV</h1>
        <p className="text-sm">Coding Enthusiast</p>
      </div>
    </div>
  );
}

export const Logo = React.memo(Component);
