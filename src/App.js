import React from "react";
import TopHeader from "./components/topHeader/TopHeader";
import Navbar from "./components/topHeader/navbar/Navbar";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";

const App = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <HomeScreen />
    </>
  );
};

export default App;
