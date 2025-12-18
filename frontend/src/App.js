import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Business from "./pages/Business";
import Startups from "./pages/Startups";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import { getCartCount } from "./mockData";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    setCartCount(getCartCount());
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home onCartUpdate={updateCartCount} />} />
          <Route path="/all-products" element={<AllProducts onCartUpdate={updateCartCount} />} />
          <Route path="/product/:id" element={<ProductDetail onCartUpdate={updateCartCount} />} />
          <Route path="/cart" element={<Cart onCartUpdate={updateCartCount} />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
