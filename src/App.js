import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');

  const toggleModeBlue = () => {
    setmode('blue');
    document.querySelector('body').style.backgroundColor = '#6096B4'
  };
  const toggleModeSkin = () => {
    setmode('skin');
    document.querySelector('body').style.backgroundColor = '#FAAB78'
  };
  const toggleModeDark = () => {
    setmode('darkBlue');
    document.querySelector('body').style.backgroundColor = '#332C39'
  };
  const toggleModeWhite = () => {
    setmode('LightWhite');
    document.querySelector('body').style.backgroundColor = '#fff'
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleModeBlue={toggleModeBlue} toggleModeSkin={toggleModeSkin} toggleModeDark={toggleModeDark} toggleModeWhite={toggleModeWhite} />
      {/* <Routes> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* </Route> */}
      {/* <Route path="/" element={<TextForm heading='Enter text to analyze' mode={mode} toggleMode={toggleModeBlue} />}/> */}
      <TextForm heading='Enter text to analyze' mode={mode} toggleMode={toggleModeBlue} />
      {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
