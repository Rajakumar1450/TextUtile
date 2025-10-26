import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { /* BrowserRouter */ HashRouter as Router, Routes, Route } from "react-router-dom";
/* BrousRouter doesn't support when we deploy on github */
function App() {
  const [mode, setmode] = useState("light");
  const [modeText, setmodeText] = useState("dark mode");
  const [textcolor, settextColor] = useState("dark");
  const [alert, setAlert] = useState(null);
  const [myStyle, setmyStyle] = useState({
      color: "black",
      backgroundColor: "white",
    });

  const showAlert = (message, type) => {
    setAlert({ mssg: message, type });
    setTimeout(() => setAlert(null), 1500);
  };
  
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      setmodeText("light mode");
      settextColor("light");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
      setmyStyle({
        color: "white",
        backgroundColor: "rgb(36 74 104)",
        border:'1px solid white'
      });
    } else {
      setmode("light");
      setmodeText("dark mode");
      settextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      setmyStyle({
      color: "black",
      backgroundColor: "white",
      border:"2 px solid #191a1aff"
    });
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtile"
        AboutText="About Us"
        mode={mode}
        togglemode={togglemode}
        modeText={modeText}
        textcolor={textcolor}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About myStyle={myStyle} />} />
          <Route
            exact
            path="/" // exact likhana is always a good idea beacause react give partially path matching so exact give exact path
            element={
              <TextForm
                heading="Enter your text to analyse"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="*" element={<h2>404 - Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
