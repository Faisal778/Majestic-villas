import React from "react";
import Estates from "./Estates";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Map from "./Map";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Majestic Villas | Home</title>
      </Helmet>
      <Banner className="rounded-lg"></Banner>
      <Estates data-aos="fade-up-right"></Estates>
      <WhyUs></WhyUs>
      <Map></Map>
    </div>
  );
};

export default Home;
