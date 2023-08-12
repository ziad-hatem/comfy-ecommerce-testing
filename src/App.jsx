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
import PageLoader from "./components/PageLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartPage from "./Pages/CartPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          index
          path="/"
          element={<Home />}
          loader={<PageLoader />}
        />
        <Route 
          path="about"
          element={<About />}
          loader={<PageLoader />}
        />
        <Route 
          path="products"
          element={<Products />}
          loader={<PageLoader />}
        />
        <Route 
        path="/products/:id"
          element={<SingleProductPage />}
          errorElement={<div>Sorry We Can't Get This Product</div>}
          loader={<PageLoader />}
        />
        <Route
          path="checkout"
          element={<CheckoutPage />}
          loader={<PageLoader />}
        />
        <Route
          path="cart"
          element={<CartPage />}
          loader={<PageLoader />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
      <ToastContainer position='bottom-right' draggable />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
