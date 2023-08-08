import React from "react";
import { styled } from "styled-components";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./components/Footer";
import About from "./Pages/About";
import CheckoutPage from "./Pages/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element ={<About />} />
        <Route path="checkout" element ={<CheckoutPage />} />
        <Route path="*" element ={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
