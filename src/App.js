import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Basket from './component/Basket';
import { useEffect, useState } from 'react';
import About from './component/About';
import Filter from './component/Filter';
import Footer from './component/Footer';


import Navfilter from './component/Navfilter';
import Mainlayout from './mainlayout';

import LandingPage from './component/LandingPage';

import Checkout1 from "./component/Checkout/Checkout1";
import Checkout2 from "./component/Checkout/Checkout2";
import Checkout3 from "./component/Checkout/Checkout3";
import Checkout4 from "./component/Checkout/Checkout4";
import Checkout5 from "./component/Checkout/Checkout5";

// import Shipping from './component/Shipping';



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const getCategory = () => category;
  return (
    <>
   
    <Mainlayout/>
      <Navbar countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />

      {/* <LandingPage /> */}
      <Routes>
      {/* <Route exact path='/TodosList' element={<TodosList />} /> */}
        {/* <Route exact path='/landingpage' element={<LandingPage />} /> */}
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path = '/testing' component={<productListing/>}/>
      
        <Route exact path='/men' element={<Home category="men's clothing"/>} />
        <Route exact path='/women' element={<Home category="women's clothing" />} />
        <Route exact path='/jewellery' element={<Home category="jewelery" />} />
        <Route exact path='/electronics' element={<Home category="electronics" />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/filter' element={<Filter />} />
        <Route exact path='/products' element={<Products category="" />} />
      
        <Route path="/Checkout1" element={<Checkout1 cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="/Checkout2" element={<Checkout2 cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="/Checkout3" element={<Checkout3 cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="/Checkout4" element={<Checkout4 cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="/Checkout5" element={<Checkout5 />} />
    
        <Route exact path='/products/:id' element={<Product onAdd={onAdd} />} />
        <Route exact path='/cart' element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
