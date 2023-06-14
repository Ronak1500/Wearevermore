import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./baseUrl";
import Footer from "./Footer";
import Header from "./Header";
import cart from './cart.css'
import {Rings} from "react-loader-spinner";

function Cart() {
  useEffect(() => {
    getCartData(); window.scrollTo(0,0)
  }, []);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const[loader,setLoader]=useState(false)
  const totalPrice = cartData.map((i) => i.price*i.quantity).reduce((a, b) => a + b, 0);
  const getCartData = () => {
    axios
      .get(baseUrl+"cart")
      .then((res) => setCartData(res.data.data.filter((i)=>i.email===localStorage.getItem("userEmail"))));
  };
  const deleteCartData = (x) => {
    setLoader(true)
    axios
      .delete(baseUrl+"cart/" + x)
      .then(() => {getCartData()
      setLoader(false)
      });
  };
  const updateData = (x,y)=>{
    setLoader(true)
    axios.put(baseUrl+"cart/" + x,{
        quantity:y
    }).then(()=>{getCartData()
      setLoader(false)
    })
  }
  return (
    <div>
      <Header />
      {loader ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            zIndex: 10,  
            display: "flex",
            top:0
          }}
        >
          <Rings
            height="100"
            width="100"
            color="#561d1f"
            secondaryColor="white"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{ alignItems: "center" }}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : null}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <b style={{ fontSize: 40, fontWeight: "lighter", color:"#561D1F" }}>Your Cart</b>
        <div
          style={{
            borderBottom: "1px solid black",
            width: "11%",
            textAlign: "center",
          }}
        >
          <label onClick={()=>navigate("/")} style={{cursor:"pointer"}}>Continue Shopping</label>
        </div>
        <br/>
      </div>
        {cartData.length===0?
        <div style={{fontSize:20, textAlign:"center", width:"100%"}}>
          <label >Your cart is currently empty.</label>
        </div>
      :
      <>
      <div style={{ width: "90%", marginLeft: "5%" }}>
        <table className="table">
          <thead>
            <th style={{ width: "50%" }}>Product</th>
            <th className="cart-title" style={{ textAlign: "center" }}>Price</th>
            <th>Quantity</th>
            <th style={{ textAlign: "end" }}>Total</th>
          </thead>
          <tbody>
            {cartData.map((i) => (
              <tr>
                <td style={{ width: "50%" }}>
                  <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "20%" }}>
                      <img style={{ width: "100%", cursor:'pointer' }} src={i?.thumbnailImage} />
                    </div>
                    <div 
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "5%",
                      }}
                    >
                      <label className="cart-title">{i.title}</label>
                      <b>{i?.brand}</b>
                      <label>Size : {i?.size}</label>
                      <label
                        style={{ textDecoration: "underline", cursor:'pointer' }}
                        onClick={() => deleteCartData(i._id)}
                      >
                        Remove
                      </label>
                    </div>
                  </div>
                </td>
                <td className="cart-title" style={{ width: "20%", textAlign: "center", fontWeight:"bold" }}>
                  Rs.{i?.price}
                </td>
                <td style={{ width: "10%" }}>
                <button  disabled={i?.quantity===1} style={{ width: 30, height: 30,cursor:'pointer', borderRadius:"50%", border:"none",backgroundColor:i.quantity!==1&&'#561d1f', color:i.quantity!==1&&'#ffdaa9', fontWeight:'bold'}} onClick={()=>{
                    updateData(i._id,i?.quantity-1)
                    setCartData(cartData.map((j)=>j._id===i.Id?{...j,quantity:i?.quantity-1}:j))
                  } 
                }>-</button>
                  <label style={{ width: "30%", height: "6vh", textAlign:'center' }}>
                    {i?.quantity}
                  </label>
                  <button  style={{ width: 30, height: 30, borderRadius:"50%",cursor:'pointer',  border:"none",backgroundColor:'#561d1f', color:'#ffdaa9', fontWeight:'bold'}} onClick={()=>{
                    updateData(i._id,i?.quantity+1)
                    setCartData(cartData.map((j)=>j._id===i.Id?{...j,quantity:i?.quantity+1}:j))
                  }
                }>+</button>
                </td>
                <td style={{ width: "20%", textAlign: "end",  fontWeight:"bold" }}>
                  Rs.{i?.quantity*i?.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{width:"100%",display:"flex", flexDirection:"column", alignItems:"end", paddingRight:"5%"}}>
        <div style={{width:"30%",display:"flex", justifyContent:"space-between", fontSize:18}}>
        <label>Subtotal:</label>
        <b>Rs.{totalPrice}</b>
        </div>
        <div >
        <label>Taxes and shipping calculated at checkout</label>
        </div>
        <button onClick={()=>navigate("/Checkout")} style={{width:"10%", height:"6vh", border:"none", color:"white", backgroundColor:"black",cursor:'pointer' }}>CHECK OUT</button>
      </div>
      </>}
      <br/>
      <Footer />
    </div>
  );
}

export default Cart;
