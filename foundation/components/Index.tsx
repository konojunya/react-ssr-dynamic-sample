import * as React from "react";
import { Link } from "react-router-dom";

const Index = () => (
  <>
    <h1>index page</h1>
    <Link to="/about">to about</Link>
  </>
);

export default Index;
