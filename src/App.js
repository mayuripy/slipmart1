import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Containers/Header";
import ProductListing from "./Containers/ProductListing";
import ProductDetail from "./Containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found !</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
