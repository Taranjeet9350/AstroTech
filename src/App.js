import React from "react";
import Whyastro from "./WhyAstro/WhyAstro";
import Navbar from "./common/Navbar/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
function App() {
  return (
    <div className="AstroTech">
     <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
     <div className="max-w-md w-full space-y-8">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Whyastro/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
      </div>
      </div>
   </div>
   
  );
}

export default App;
