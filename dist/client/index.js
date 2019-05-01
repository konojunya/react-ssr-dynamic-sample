"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_dom_1 = require("react-dom");
const routes_1 = require("../foundation/routes");
const WaitingComponent = (Component) => {
    return (props) => (React.createElement(React.Suspense, { fallback: React.createElement("p", null, "loading...") },
        React.createElement(Component, Object.assign({}, props))));
};
const routers = [
    {
        exact: true,
        path: "/",
        component: WaitingComponent(React.lazy(() => Promise.resolve().then(() => __importStar(require("../foundation/components/Index")))))
    },
    {
        path: "/about",
        component: WaitingComponent(React.lazy(() => Promise.resolve().then(() => __importStar(require("../foundation/components/About")))))
    }
];
const routes = routes_1.createRouter(routers);
react_dom_1.hydrate(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement("h1", null, "client"),
    routes), document.getElementById("app"));
//# sourceMappingURL=index.js.map