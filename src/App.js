import React from "react";
import Header from "./Header.js";
import CurrentWeather from "./CurrentWeather.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CurrentWeather />
      <Footer />
    </div>
  );
}
