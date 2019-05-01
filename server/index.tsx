import express from "express";
import { renderToNodeStream } from "react-dom/server";
import * as React from "react";

import { createRouter } from "../foundation/routes";
import { StaticRouter } from "react-router-dom";

// / pages
import Index from "../foundation/components/Index";
import About from "../foundation/components/About";

const App: React.FunctionComponent = ({ children }) => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>dynamic sample</title>
    </head>
    <body>
      <div id="app">{children}</div>
      <script src="/static/vendors.js" />
      <script src="/static/bundle.js" />
    </body>
  </html>
);

const app = express();

app.use("/static", express.static("dist"));

const routers = [
  { exact: true, path: "/", component: Index },
  { path: "/about", component: About }
];

app.get(["/", "/about"], (req, res) => {
  const context = {};
  const routes = createRouter(routers);

  renderToNodeStream(
    <App>
      <StaticRouter location={req.url} context={context}>
        {routes}
      </StaticRouter>
    </App>
  ).pipe(res);
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});
