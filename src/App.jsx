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
import SingleProductPage from "./Pages/SingleProductPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="/products/:id"
          element={<SingleProductPage />}
          errorElement={<div>Sorry We Can't Get This Product</div>}
        />
        <Route path="checkout" element ={<CheckoutPage />} />
        <Route path="*" element ={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
