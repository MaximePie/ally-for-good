import Navbar from "./components/molecules/Navbar/Navbar";
import React from "react";
import {Outlet} from "react-router";


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Outlet/>
    </div>
  )
}

export default App
