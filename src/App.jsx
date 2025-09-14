import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { AboutUs } from "./AboutUs/AboutUs";
import { ContactUs } from "./ContactUs/ContactUs";
import { HairTab } from "./HairTab/HairTab";
import { SkinTab } from "./SkinTab/SkinTab";
import { NailsTab } from "./NailsTab/NailsTab";
import { MakeupTab } from "./MakeupTab/MakeupTab";


function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="/hairartistry" element={<HairTab></HairTab>}></Route>
          <Route path="/skinartistry" element={<SkinTab></SkinTab>}></Route>
          <Route path="/nailsartistry" element={<NailsTab></NailsTab>}></Route>
          <Route path="/makeupartistry" element={<MakeupTab></MakeupTab>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
