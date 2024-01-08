import React from "react";
import Navbar from "./common/Navbar/Navbar";
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

    </>
  );
}

export default App;
