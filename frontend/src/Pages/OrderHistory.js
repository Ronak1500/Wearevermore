import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from './baseUrl'

function OrderHistory() {
  const navigate=useNavigate()
  useEffect(()=>{window.scrollTo(0,0); getorderitem()},[])
  useEffect(()=>{
    const lc=localStorage.getItem("user")
    if(lc!=="yes"){
      navigate("/Login")
 } })
 const emailId = localStorage.getItem('userEmail')

const [underline, setUnderline]= useState(false)
const [orderItem, setOrderItem]= useState([])
const [showorder, setShoworder]= useState(false)
const getorderitem=()=>{
  axios.get(baseUrl+"order").then((res)=>setOrderItem(res.data.data))
}
  return (
    <div>
        <Header/>
        <br/>
      <br/>
      {showorder===true?
      <div style={{ width: "80%", marginLeft: "10%", display:"flex",flexDirection:"column", alignItems:"center"}}>
        <b style={{fontSize:40}}>My Account</b>
        <br/>
        <br/>
        <div>
        <label onClick={()=>setShoworder(false)} 
         onMouseLeave={()=>setUnderline(false)} onMouseOver={()=>setUnderline(true)} >
        Return to Account Details
        </label>
        <div style={{width:underline?180:0,height:"2px",transition:"0.5s", backgroundColor:"#561D1F",alignSelf:"flex-start" }}></div>
        </div>
        <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
            <div style={{width:"65%", display:"flex", flexDirection:"column", textAlign:"start"}}>
                <label style={{fontSize:25}}>ORDER {localStorage.getItem("orderId")}</label>    
                <label style={{fontSize:15}}>Placed on {orderItem[0]?.date}</label> 
                
                  
                <table className='table' style={{border:"1px solid lightgrey"}}>

                  <thead>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>Total</th>
                  </thead>
                  <tbody>
                  {orderItem.filter((i)=>i.orderId===localStorage.getItem("orderId")).map((i)=>
                    <tr>
                    <td onClick={()=>{navigate("/ProductView"); localStorage.setItem('productdata', JSON.stringify(i.order[0]))}}>{i.order[0]?.title}</td>
                    <td>{i.order[0]?.price}</td>
                    <td>{i.order[0]?.quantity}</td>
                    <td>Rs. {i.totalPrice}</td>
                    </tr>
                  )}
                  <tr >
                    <td>Subtotal<br/>Shipping</td>
                    <td></td>
                    <td></td>
                    <td>Rs.{orderItem[0]?.totalPrice} <br/> Rs. 0 </td>
                  </tr>
                 
                  <tr style={{fontWeight:"bold"}} >
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td>Rs. {orderItem[0]?.totalPrice}</td>
                  </tr>
                  </tbody>
                </table>
            </div>
            <div style={{width:"30%", textAlign:"start"}}>
                <label style={{fontSize:25}}>ACCOUNT DETAILS</label><br/>
                <label>{localStorage.getItem("fname")}          {localStorage.getItem("lname")}</label><br/>
                <label>{orderItem[0]?.address}</label>
                {/* <button style={{border:"none", backgroundColor:"black", color:"white"}}>VIEW ADDRESS</button> */}
            </div>
            
        </div>
      </div>:
      <div style={{ width: "80%", marginLeft: "10%", display:"flex",flexDirection:"column", alignItems:"center"}}>
        <b style={{fontSize:40, color:"#561D1F"}}>My Account</b>
        <br/>
        <br/>
        <div>
        <label  onMouseLeave={()=>setUnderline(false)} onMouseOver={()=>setUnderline(true)} 
         onClick={()=>{localStorage.removeItem("user");navigate("/Login")}} style={{textAlign:"justify"}}>
            Log Out
        </label>
        <div style={{width:underline?58:0,height:"2px",transition:"0.5s", backgroundColor:"#561D1F",alignSelf:"flex-start" }}></div>
        </div>
        <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
            <div style={{width:"65%", display:"flex", flexDirection:"column", textAlign:"start"}}>
                <label style={{fontSize:25, }}>ORDER HISTORY</label>
               
                {orderItem.length>0?
                <table className='table table-bordered'>
                  <thead>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Payment Status</th>
                    <th>Fulfillment Status</th>
                    <th>Total</th>
                  </thead>
                  <tbody>
                  {orderItem.filter((i)=>i.order[0]?.email===emailId).map((i)=>
                    <tr>
                    <td><button style={{backgroundColor:"transparent", border:"2px solid #561D1F", borderRadius:10}} onClick={()=>{
                      localStorage.setItem("orderId",i.orderId)
                      setShoworder(true)}}>{i.orderId}</button></td>
                    <td>{i.date}</td>
                    <td>Pending</td>
                    <td>Unfulfilled	</td>
                    <td>Rs. {i.totalPrice}</td>
                    </tr>
                  )}
                  </tbody>
                </table>:
                <label>You haven't placed any orders yet.</label>}
            </div>
            <div style={{width:"30%", textAlign:"start"}}>
                <label style={{fontSize:25}}>ACCOUNT DETAILS</label><br/>
                <label>{localStorage.getItem("fname")}          {localStorage.getItem("lname")}</label><br/>
                <label>{orderItem[0]?.address}</label>
                {/* <button style={{border:"none", backgroundColor:"black", color:"white"}}>VIEW ADDRESS</button> */}
            </div>
            
        </div>
      </div>}
      <br/>
      <br/>
        <Footer/>
    </div>
  )
}

export default OrderHistory