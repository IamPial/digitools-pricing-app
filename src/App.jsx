import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Homepage/Banner";
import Counter from "./components/Homepage/Counter";
import Features from "./components/Features/Features";

const fetchData = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
const fetchPromise = fetchData();

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Counter />
      <Features fetchPromise={fetchPromise} />
    </div>
  );
};

export default App;
