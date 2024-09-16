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
import StoryVid from './components/Story';

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
          <StoryVid />
          {/* <FragranceNotes />
          <Contact /> */}
        </>
    </div>
  );
}

export default App;
