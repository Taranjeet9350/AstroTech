import React from "react";
import Whyastro from "./WhyAstro/WhyAstro";
import Navbar from "./common/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="AstroTech">
    
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

     
   <Whyastro/>
   </div>
   
  );
}

export default App;
