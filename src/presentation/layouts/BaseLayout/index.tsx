import { Outlet } from "@tanstack/react-router";
import { Container, SiteHeader } from "@components";

export function BaseLayout() {
  return (
    <>
      <SiteHeader />
      <div className="pt-16">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
}
