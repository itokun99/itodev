import React, { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {}

function Component({ children }: ContainerProps) {
  return <div className="mx-auto max-w-screen-xl px-6">{children}</div>;
}

export const Container = React.memo(Component);
