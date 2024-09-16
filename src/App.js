import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PhotoFrame from "./components/PhotoFrame";
import FragranceNotes from "./components/FragranceNotes";
import About   from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import KeyFeatures from "./components/KeyFeatures";
import TheTeam from './components/TheTeam';

function App() {

  return (
    <div>
        <>
          <Navbar />
          <Landing />
          <Home />
          <PhotoFrame />
          <KeyFeatures />
          <About />
          <TheTeam />
          {/* <FragranceNotes />
          <Contact /> */}
        </>
    </div>
  );
}

export default App;
