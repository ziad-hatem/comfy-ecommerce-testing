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
import Products from "./Pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="/products/:id" element={<div className="h-[100vh] bg-red-500 text-white"><h1>SingleProduct</h1></div>} />
        <Route path="checkout" element ={<CheckoutPage />} />
        <Route path="*" element ={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
