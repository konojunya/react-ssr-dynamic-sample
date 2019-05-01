import * as React from "react";
import { RouteProps } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

export const createRouter = (routes: RouteProps[]) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route {...route} key={`router-index-${index}`} />
      ))}
    </Switch>
  );
};
