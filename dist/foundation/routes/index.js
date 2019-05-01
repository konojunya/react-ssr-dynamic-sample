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
exports.createRouter = (routes) => {
    return (React.createElement(react_router_dom_1.Switch, null, routes.map((route, index) => (React.createElement(react_router_dom_1.Route, Object.assign({}, route, { key: `router-index-${index}` }))))));
};
//# sourceMappingURL=index.js.map