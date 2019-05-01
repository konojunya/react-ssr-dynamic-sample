import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrate } from "react-dom";

import { createRouter } from "../foundation/routes";

const WaitingComponent = (Component: any) => {
  return (props: any) => (
    <React.Suspense fallback={<p>loading...</p>}>
      <Component {...props} />
    </React.Suspense>
  );
};

const routers = [
  {
    exact: true,
    path: "/",
    component: WaitingComponent(
      React.lazy(() => import("../foundation/components/Index"))
    )
  },
  {
    path: "/about",
    component: WaitingComponent(
      React.lazy(() => import("../foundation/components/About"))
    )
  }
];

const routes = createRouter(routers);

hydrate(
  <BrowserRouter>
    <h1>client</h1>
    {routes}
  </BrowserRouter>,
  document.getElementById("app")
);
