import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import About from './Components/about/About';
import OurServices from './Components/our_services/OurServices';
import ContactUs from './Components/contact_us/ContactUs';
import Shop from './Components/shop/Shop';
import Cart from './Components/shop_dropdown_pages/Cart';
import Checkout from './Components/shop_dropdown_pages/Checkout';
import MyAccount from './Components/shop_dropdown_pages/MyAccount';
import Wishlist from './Components/shop_dropdown_pages/Wishlist';
import ShopDetail from './Components/shop_dropdown_pages/ShopDetail';
import NotFound from './NotFound';


export default function App() {

  return (
  <div>
    <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shop-detail" element={<ShopDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

    <Footer />
  </div>
  );
}