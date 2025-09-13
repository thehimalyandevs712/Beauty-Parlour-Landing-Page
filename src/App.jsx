import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";


function App() {
  return (
    <>
    <Header></Header>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}></Route>        
           <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
           <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
