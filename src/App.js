import React, { useState } from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PhotoFrame from "./components/PhotoFrame";
import FragranceNotes from "./components/FragranceNotes";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import KeyFeatures from "./components/KeyFeatures";

function App() {

  return (
    <div>
        <>
          <Navbar />
          <Landing />
          <Home />
          <PhotoFrame />
          <KeyFeatures />
          {/* <FragranceNotes />
          <Shop />
          <Contact /> */}
        </>
    </div>
  );
}

export default App;
