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
import Signin from './component/Signin';
import Signup from "./component/CreateAccount";
import Navfilter from './component/Navfilter';
import Mainlayout from './mainlayout';
import Checkout1 from './component/Checkout1';
import LandingPage from './component/LandingPage';
import Checkout3 from './component/Checkout3';
import Checkout2 from './component/Checkout2';
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
        {/* <Route exact path='/landingpage' element={<LandingPage />} /> */}
        <Route exact path='/LandingPage' element={<LandingPage category={category} />} />
        <Route exact path='/Checkout1' element={<Checkout1 />} />
        <Route exact path='/' element={<Home category={category} />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/filter' element={<Filter />} />
        <Route exact path='/products' element={<Products category="" />} />
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/Checkout2' element={<Checkout2 />} />
        <Route exact path='/Checkout3' element={<Checkout3 />} />
        {/* <Route exact path='/Checkout' element={<Checkout />} /> */}
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/products/:id' element={<Product onAdd={onAdd} />} />
        <Route exact path='/cart' element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
