type RouteString = `/${string}`;

export const routes = {
  landingPage: "/",
  shop: "/shop",
  schedule: "/schedule",
} satisfies Record<string, RouteString>;
