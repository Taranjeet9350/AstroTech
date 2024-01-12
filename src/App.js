import React from "react";
import Whyastro from "./WhyAstro/WhyAstro";
import Navbar from "./common/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import styles from "./index.css"

function App() {
  return (
    <div className="AstroTech">
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Whyastro />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
        
    </div>

  );
}

export default App;
