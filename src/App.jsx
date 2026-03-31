import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Homepage/Banner";
import Counter from "./components/Homepage/Counter";
import Features from "./components/Features/Features";
import GetStarted from "./components/Homepage/GetStarted";
import Pricing from "./components/Homepage/Pricing";

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
    </div>
  );
};

export default App;
