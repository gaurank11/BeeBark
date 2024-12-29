import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";
import LetsTalk from "./components/letstalk";
import Contact from "./components/contact";
import LoginPage from "./components/login";
import JoinUs from "./components/join";
import SignUpPage from "./components/signup";



export default function App() {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<div>Page 1</div>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/page3" element={<div>Page 3</div>} />
        <Route path="/page4" element={<div>Page 4</div>} />
        <Route path ="/LetsTalk" element={<LetsTalk />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/login" element={<LoginPage />} />
        <Route path ="/signup" element={<SignUpPage />} />
        <Route path ="/join" element={<JoinUs />} />
      </Routes>
      <Footer />
     
    </div>
  );
}