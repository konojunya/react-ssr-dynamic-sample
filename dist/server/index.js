"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("react-dom/server");
const React = __importStar(require("react"));
const routes_1 = require("../foundation/routes");
const react_router_dom_1 = require("react-router-dom");
// / pages
const Index_1 = __importDefault(require("../foundation/components/Index"));
const About_1 = __importDefault(require("../foundation/components/About"));
const App = ({ children }) => (React.createElement("html", { lang: "ja" },
    React.createElement("head", null,
        React.createElement("meta", { charSet: "UTF-8" }),
        React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        React.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge" }),
        React.createElement("title", null, "dynamic sample")),
    React.createElement("body", null,
        React.createElement("div", { id: "app" }, children),
        React.createElement("script", { src: "/static/vendors.js" }),
        React.createElement("script", { src: "/static/bundle.js" }))));
const app = express_1.default();
app.use("/static", express_1.default.static("dist"));
const routers = [
    { exact: true, path: "/", component: Index_1.default },
    { path: "/about", component: About_1.default }
];
app.get(["/", "/about"], (req, res) => {
    const context = {};
    const routes = routes_1.createRouter(routers);
    server_1.renderToNodeStream(React.createElement(App, null,
        React.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context }, routes))).pipe(res);
});
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map