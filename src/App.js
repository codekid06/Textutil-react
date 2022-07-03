import React from "react";
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');//Enabled or not
  const [btn, setbtn] = useState("Enable Dark Mode");
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setbtn("Disable Dark Mode")
      // showAlert("Dark Mode is Enabled", "sucess")
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setbtn("Enable Dark Mode")
      // showAlert("Light Mode is Enabled", "sucess")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} btn={btn} />
      <div className="container my-5">
        {/* <Switch> */}
          {/* <Route exact path="/about">
            <About/> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <Text heading="Enter the text to analyse" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}

      </div>
      {/* </Router> */}
    </>
  );
}
export default App;