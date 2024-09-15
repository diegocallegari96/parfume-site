import React, { useState } from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import FragranceNotes from "./components/FragranceNotes";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Story from "./components/Story";

function App() {

  return (
    <div>
        <>
          <Navbar />
          <Landing />
          <Home />
          <About />
          <Story />
          <FragranceNotes />
          <Shop />
          <Contact />
        </>
    </div>
  );
}

export default App;
