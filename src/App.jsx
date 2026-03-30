import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Homepage/Banner";
import Counter from "./components/Homepage/Counter";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Counter />
    </div>
  );
};

export default App;
