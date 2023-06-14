import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'

function ContactUs() {
    useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div>
        <Header/>
        <div style={{width:"70%", marginLeft:"15%", textAlign:"center"}}>
            <b style={{fontSize:40, color:"#561D1F"}}>Contact Us</b>
            <div style={{width:"100%",height:"30vh", display:"flex", alignItems:"center", borderBottom:"1px solid #561D1F" }}>
                <div style={{width:"33%",height:"20vh",}}><b>CALL</b><br/><label>+91 9752929335</label></div>
                <div style={{width:"33%",height:"20vh",borderLeft:"1px solid grey"}}><b>EMAIL</b><br/><label>socially.ecomm@gmail.com</label></div>
                <div style={{width:"33%",height:"20vh",borderLeft:"1px solid grey"}}><b>STORE</b><br/><label>Vijay Nagar, Indore, Madhya Pradesh 452010</label></div>
            </div>
            <br/>
            <b style={{fontSize:40, color:"#561D1F"}}>Leave a Message!</b>
            <div style={{width:"100%", textAlign:"start"}}>
                <div style={{width:"100%", display:"flex", gap:"2%"}}>
                    <div style={{width:"49%"}}><label>Name</label><br/>
                    <input style={{width:"100%", height:"6vh"}}/></div>
                    <div style={{width:"49%"}}><label>Email</label><br/>
                    <input style={{width:"100%", height:"6vh"}}/></div>
                </div>
                <br/>
                <label>Phone Number</label><br/>
                <input style={{width:"100%", height:"6vh"}} /><br/><br/>
                <label>Message</label><br/>
                <textarea style={{width:"100%", height:"30vh", outline:"none", borderColor:"lightgrey"}} /><br/><br/>
                <button style={{width:"100px", height:"6vh", border:"none", color:"#F5D3D4", backgroundColor:"#561D1F"}}>Send</button>
            </div>
            <br/><br/>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs