import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductDetails from "./pages/product-details";
import Breadcrumbs from "./components/breadcrumbs";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductListing />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
