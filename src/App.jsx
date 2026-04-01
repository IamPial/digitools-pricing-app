import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Homepage/Banner";
import Counter from "./components/Homepage/Counter";
import Features from "./components/Features/Features";
import GetStarted from "./components/Homepage/GetStarted";
import Pricing from "./components/Homepage/Pricing";
import WorkFlow from "./components/Homepage/WorkFlow";
import Footer from "./components/Homepage/Footer";

//for product list and cart list
const fetchData = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
const fetchPromise = fetchData();

// for pricing list
const fetchPricingData = async () => {
  const res = await fetch("/pricing.json");
  return res.json();
};
const pricingPromise = fetchPricingData();

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar count={count} />
      <Banner />
      <Counter />
      <Features fetchPromise={fetchPromise} count={count} setCount={setCount} />
      <GetStarted />
      <Pricing pricingPromise={pricingPromise} />
      <WorkFlow />
      <Footer />
    </div>
  );
};

App.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.number.isRequired,
  fetchPromise: PropTypes.object.isRequired,
  pricingPromise: PropTypes.object.isRequired,
};

export default App;
