import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import User from "./common/User/User";
import Login from "./components/login/login";
function App() {
  

  //Step 1 :
  const { productItems } = Data;
  const { shopItems } = Sdata;

  //Step 2 :
  const [CartItem, setCartItem] = useState([]);

  //Step 4 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
     
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  // Stpe: 6
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

   
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
           setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Route path="/" exact>
          <Login
            productItems={productItems}
            addToCart={addToCart}
            shopItems={shopItems}
          />
        </Route>
        <Route path="/login" exact>
          <Login
            productItems={productItems}
            addToCart={addToCart}
            shopItems={shopItems}
          />
        </Route>
        <Route path="/home" exact>
          <Header CartItem={CartItem} />

          <Pages
            productItems={productItems}
            addToCart={addToCart}
            shopItems={shopItems}
          />
          <Footer />
        </Route>
        <Route path="/user" exact>
          <Header CartItem={CartItem} />

          <User
            productItems={productItems}
            addToCart={addToCart}
            shopItems={shopItems}
          />
          <Footer />
        </Route>
        <Route path="/cart" exact>
          <Header CartItem={CartItem} />

          <Cart
            CartItem={CartItem}
            addToCart={addToCart}
            decreaseQty={decreaseQty}
          />
          <Footer />
        </Route>
      </Router>
    </>
  );
}

export default App;
