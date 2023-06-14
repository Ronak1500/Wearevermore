import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import footer from './footer.css'
import VideoCallApp from './VideoCallApp' 

function Footer() {
    useEffect(()=>{window.scrollTo(0,0)},[])
    const navigate  = useNavigate()
    const facebook  = ()=>{ window.open("https://www.facebook.com/")}
    const pinterest = ()=>{ window.open("https://in.pinterest.com/")}
    const instagram = ()=>{ window.open("https://www.instagram.com/")}

    const [show, setShow] = useState(0)
  return (
    <div>
        <div className='res_footer'>
            <div style={{height:30}} onClick={()=>setShow(1)}><b >MEASUREMENT</b></div>
            
            <div style={{overflow:"hidden",height:show===1?30:0, transition:"0.5s"}}><small onClick={()=>navigate("/SizeChart")}>Size Chart</small></div>

            <div style={{height:30}} onClick={()=>setShow(2)}><b>ABOUT US</b></div>
            
            <div style={{overflow:"hidden",height:show===2?100:0,display:"flex", flexDirection:"column", transition:"0.5s"}}>
                    <small onClick={()=>navigate("/AboutUs")}>About us</small>
                    <small onClick={()=>navigate("/ContactUs")}>Contact us</small>
                    <small onClick={()=>navigate("/Career")}>Careers</small>
                    <small>FlagShip Store</small>
                    <small onClick={()=>navigate("/VideoCallApp")}>Video Call Appointment</small>
            </div>

            <div style={{height:30}} onClick={()=>setShow(3)}><b>MY ACCOUNT</b></div>
            
            <div style={{overflow:"hidden",height:show===3?100:0, display:"flex", flexDirection:"column", transition:"0.5s"}}>
                    <small onClick={()=>navigate("/Login")}>Login</small>
                    <small onClick={()=>navigate("/Cart")}>Shopping Bag</small> 
                    <small onClick={()=>navigate("/WishList")}> Wish List</small>
                    <small onClick={()=>navigate("/OrderHistory")}>Order History</small>
                    <small onClick={()=>navigate("/OrderHistory")}>Order Tracking</small>
            </div>
            
            <div style={{height:30}} onClick={()=>setShow(4)}>  <b>POLICIES</b></div>
            
            <div style={{overflow:"hidden",height:show===4?100:0,display:"flex", flexDirection:"column", transition:"0.5s"}}>
                    <small onClick={()=>navigate("/TandC")}>Terms & Conditions</small>
                    <small onClick={()=>navigate("/ShippingPolicy")}>Shipping Policy</small>
                    <small onClick={()=>navigate("/ReturnPolicy")}>Return Policy</small>
                    <small onClick={()=>navigate("/FAQs")}>FAQs</small>
                    <small onClick={()=>navigate("/CustCharge")}>Customization Charges</small>
                </div>
        </div>



        <div className='footer'>
            <div className='foot'>
            <div className='foot-1'>
                <div style={{width:"30%", display:"flex", flexDirection:"column"}}>
                    <b>MEASUREMENT</b>
                    <small onClick={()=>navigate("/SizeChart")}>Size Chart</small>
                </div>
                <div style={{width:"30%", display:"flex", flexDirection:"column"}}>
                    <b>ABOUT US</b>
                    <small onClick={()=>navigate("/AboutUs")}>About us</small>
                    <small onClick={()=>navigate("/ContactUs")}>Contact us</small>
                    <small onClick={()=>navigate("/Career")}>Careers</small>
                    <small>FlagShip Store</small>
                    <small onClick={()=>navigate("/VideoCallApp")}>Video Call Appointment</small>
                </div>
                <div style={{width:"30%", display:"flex", flexDirection:"column"}}>
                    <b>MY ACCOUNT</b>
                    <small onClick={()=>navigate("/Login")}>Login</small>
                    <small onClick={()=>navigate("/Cart")}>Shopping Bag</small> 
                    <small onClick={()=>navigate("/WishList")}> Wish List</small>
                    <small onClick={()=>navigate("/OrderHistory")}>Order History</small>
                    <small onClick={()=>navigate("/OrderHistory")}>Order Tracking</small>
                </div>
                <div style={{width:"30%", display:"flex", flexDirection:"column", marginTop:"5%"}}>
                    <b>POLICIES</b>
                    <small onClick={()=>navigate("/TandC")}>Terms & Conditions</small>
                    <small onClick={()=>navigate("/ShippingPolicy")}>Shipping Policy</small>
                    <small onClick={()=>navigate("/ReturnPolicy")}>Return Policy</small>
                    <small onClick={()=>navigate("/FAQs")}>FAQs</small>
                    <small onClick={()=>navigate("/CustCharge")}>Customization Charges</small>
                </div>
            </div>
            <div className='foot-2'>
                {/* <b style={{fontSize:17, color:"#FFDAA9"}}>NEWSLETTER</b>
                <input style={{width:"100%", height:"7vh", border:"1px solid black", borderRadius:2.5, marginTop:"5%"}} placeholder='Email address'/>
                <button className='btn-foot'>SUBSCRIBE</button><br/><br/> */}
                <b style={{marginTop:"5%", color:"#FFDAA9"}}>FOLLOW US</b><br/><br/>
                <div style={{width:"50%", display:"flex", justifyContent:"space-between", fontSize:40}}>
                    <i onClick={facebook} style={{color:"#FFDAA9"}} class="fa fa-facebook-official" aria-hidden="true"></i>
                    <i onClick={pinterest} style={{color:"#FFDAA9"}} class="fa fa-pinterest" aria-hidden="true"></i>
                    <i onClick={instagram} class="fa fa-instagram" style={{color:"#FFDAA9"}} aria-hidden="true"></i>
                </div>  <br/>
                <label style={{color:"#FFDAA9"}}>GET IN TOUCH</label><br/><br/>
                <label style={{color:"#FFDAA9", textDecoration:"underline"}}>+919752929335</label><br/><br/>
                <label style={{color:"#FFDAA9"}}>EMAIL US ON</label><br/><br/>
                <label style={{color:"#FFDAA9"}}>socially.ecomm@gmail.com</label> 
            </div>
            </div>
        {/* <div style={{border:"1px solid #FFDAA9", width:"100%",height:"8vh", display:"flex", 
        justifyContent:"center", alignItems:"center", gap:20, marginTop:"4%", color:"#FFDAA9"}}>
            <div>
        <i class="fa fa-truck" aria-hidden="true"></i>
        <label>Shipping worldwide</label>
        </div>
        <div>
        <i class="fa fa-refresh" aria-hidden="true"></i>
        <label> Customisation available</label>
        </div>
        </div> */}
        </div>
    </div>
  )
}

export default Footer