import React from "react";
import { Routes, Route } from "react-router-dom";
import TopHeader from "./components/topHeader/TopHeader";
import HomeScreen from "./pages/HomeScreen";
import "./App.css";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";
import SignUpScreen from "./pages/SignUpScreen";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </>
  );
};

export default App;
