import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import Anarkali from './Pages/Anarkali'
import Bestseller from './Pages/Bestseller'
import Career from './Pages/Career'
import Cart from './Pages/Cart'
import Celebrities from './Pages/Celebrities'
import Checkout from './Pages/Checkout'
import ContactUs from './Pages/ContactUs'
import CreateAccount from './Pages/CreateAccount'
import CustCharge from './Pages/CustCharge'
import FAQs from './Pages/FAQs'
import Footer from './Pages/Footer'
import Gowns from './Pages/Gowns'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Jumpsuit from './Pages/Jumpsuit'
import Kaftan from './Pages/Kaftan'
import Lehanga from './Pages/Lehanga'
import Login from './Pages/Login'
import Login1 from './Pages/Login1'
import NewArrival from './Pages/NewArrival'
import OrderHistory from './Pages/OrderHistory'
import ProductView from './Pages/ProductView'
import ReturnPolicy from './Pages/ReturnPolicy'
import Chikankari from './Pages/Chikankari'
import Suit from './Pages/Suit'
import Kurtis from './Pages/Kurtis'
import Pastel from './Pages/Pastel'
import ShippingPolicy from './Pages/ShippingPolicy'
import SizeChart from './Pages/SizeChart'
import TandC from './Pages/TandC'
import VideoCallApp from './Pages/VideoCallApp'
import WishList from './Pages/WishList'
import Search from './Pages/Search'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Header" element={<Header/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/ProductView" element={<ProductView/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Chikankari" element={<Chikankari/>}/>
        <Route path="/Suit" element={<Suit/>}/>
        <Route path="/Kurtis" element={<Kurtis/>}/>
        <Route path="/Pastel" element={<Pastel/>}/>
        <Route path="/NewArrival" element={<NewArrival/>}/>
        <Route path="/Jumpsuit" element={<Jumpsuit/>}/>
        <Route path="/Lehanga" element={<Lehanga/>}/>
        <Route path="/Gowns" element={<Gowns/>}/>
        <Route path="/Kaftan" element={<Kaftan/>}/>
        <Route path="/Anarkali" element={<Anarkali/>}/>
        <Route path="/Celebrities" element={<Celebrities/>}/>
        <Route path="/Bestseller" element={<Bestseller/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Login1" element={<Login1/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Sizechart" element={<SizeChart/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/VideoCallApp" element={<VideoCallApp/>}/>
        <Route path="/WishList" element={<WishList/>}/>
        <Route path="/OrderHistory" element={<OrderHistory/>}/>
        <Route path="/TandC" element={<TandC/>}/>
        <Route path="/ShippingPolicy" element={<ShippingPolicy/>}/>
        <Route path="/ReturnPolicy" element={<ReturnPolicy/>}/>
        <Route path="/FAQs" element={<FAQs/>}/>
        <Route path="/CustCharge" element={<CustCharge/>}/>
        <Route path="/CreateAccount" element={<CreateAccount/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
