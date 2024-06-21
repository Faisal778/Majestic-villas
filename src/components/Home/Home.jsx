import React from "react";
import Estates from "./Estates";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Majestic Villas | Home</title>
      </Helmet>
      <Banner className="rounded-lg"></Banner>
      <Estates></Estates>
    </div>
  );
};

export default Home;
