import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Homepage/Banner";
import Counter from "./components/Homepage/Counter";
import Features from "./components/Features/Features";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Counter />
      <Features />
    </div>
  );
};

export default App;
