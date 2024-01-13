import { RootRoute, Router } from "@tanstack/react-router";
import { BaseLayout } from "@layouts";
import { Route } from "@tanstack/react-router";
import { AboutPage, ContactPage, HomePage } from "@pages";

const rootRoute = new RootRoute({
  component: BaseLayout,
});


const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage
})


const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, contactRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
