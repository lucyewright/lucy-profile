import React from "react";
import { Link } from "gatsby";
import { Header } from "../components";

const Home = () => {
  return (
    <div>
      <Link to="/contact/">contact</Link>
      <Link to="/about/">about</Link>
      <Header title="Welcome to the homepage header" />
      <p>this is the home page</p>
    </div>
  );
};

export default Home;
