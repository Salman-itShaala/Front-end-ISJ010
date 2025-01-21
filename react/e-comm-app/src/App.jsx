import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import { createContext, useState } from "react";
import CartPage from "./pages/CartPage";

// create it's context

export const CartContext = createContext();

const App = () => {
  const intialState = JSON.parse(localStorage.getItem("cartItem")) || [];
  const [cartItems, setCartItems] = useState(intialState);

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={[cartItems, setCartItems]}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product-page/:productId" element={<ProductPage />} />
            <Route path="cart-page" element={<CartPage />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
