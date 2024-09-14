import React, { useState } from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Weed from "./components/Weed";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Landing from "./components/Landing"
import RestrictedAccess from './components/RestrictedAcces';

function App() {
  // State to track if the user has verified their age and whether they are allowed access
  const [ageVerified, setAgeVerified] = useState(false);
  const [restricted, setRestricted] = useState(false); // New state to track restricted access

  // Function to handle age verification
  const handleAgeVerification = (isOldEnough) => {
    if (isOldEnough) {
      setAgeVerified(true);
    } else {
      setRestricted(true); // Set restricted to true if the user is under 20
    }
  };

  return (
    <div>
      {/* If the user is restricted, show the restricted access message */}
      {restricted && <RestrictedAccess />}

      {/* Show the age verification modal if the user hasn't verified their age and isn't restricted */}
      {!ageVerified && !restricted && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Age Verification<br />การยืนยันอายุ</h1>
            <p className="mb-6">
              You must be at least 20 years old to enter this site.
              <br />คุณต้องมีอายุอย่างน้อย 20 ปี ถึงจะสามารถเข้าใช้เว็บไซต์นี้ได้
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleAgeVerification(true)}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              >
                I am 20 or older<br />ฉันอายุ 20 ปีขึ้นไป
              </button>
              <button
                onClick={() => handleAgeVerification(false)}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
              >
                I am under 20<br />ฉันอายุต่ำกว่า 20 ปี
              </button>
            </div>
          </div>
        </div>
      )}

      {/* If age is verified, show the rest of the site */}
      {ageVerified && (
        <>
          <Navbar />
          <Landing />
          <Home />
          <About />
          <Weed />
          <Shop />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
