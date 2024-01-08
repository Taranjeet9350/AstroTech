import React from "react";
import Whyastro from "./WhyAstro/WhyAstro";

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
