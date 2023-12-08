// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ParticlesBG from "./components/ParticlesBG";

function App() {
  return (
    <>
      <ParticlesBG />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
