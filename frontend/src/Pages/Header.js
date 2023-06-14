import React, {useEffect, useState} from 'react'
import Header1 from './Header.css'
import logo from '../Image/logo.png'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from './baseUrl'

function Header() { 
    useEffect(()=>{getCartData(); window.scrollTo(0,0)},[])
    const navigate = useNavigate()
    const [cartData, setCartData] = useState([]);
    const getCartData = () => {
      axios
        .get(baseUrl+"cart")
        .then((res) => setCartData(res.data.data));
    };

   const islogin= localStorage.getItem("user")


    const nevi=()=>{
        if(islogin==="yes"){
            navigate("/OrderHistory")
        }else{
            navigate("/Login")
        }
    }

    const [showhead, setShowhead] = useState(false)
    const [showinp, setShowInp] = useState(false)
    const [showinpres, setShowInpres] = useState(false)
    const emailInputRef = React.useRef(null);
    React.useEffect(()=>{
        setTimeout(()=>{  emailInputRef.current.focus();},200)
      }, [showinp]);
      const [input, setInput] = useState("")
 
  return (
    <div>
     
        <div className='header'>
            
            <div className='logo-div' style={{width:"30%"}}>
                    <img src={logo}  className="logo" onClick={()=>navigate("/")}/>
            </div>
           
            <div style={{width:"40%", display:"flex", flexDirection:"column" }}>
                <div style={{width:"100%", cursor:'pointer', display:"flex" ,justifyContent:"center",alignItems:"center", gap:"5%" }}>
                <input onChange={(e)=>localStorage.setItem("searchInput", e.target.value)} ref={emailInputRef} style={{height:"30px", visibility:showinp?"":"hidden",width:showinp?"200px":"0px", transition:"0.3s",outline:"none", borderRadius:3}} placeholder="Search"/>
                <i onClick={()=>{
                    if(showinp===false){
                    setShowInp(true)}
                    else{
                        navigate('/Search')
                    }
                    }} class="fa fa-search web-icon-search" style={{color:"#FFDAA9"}} aria-hidden="true"></i>

                <i onClick={()=>setShowInpres(!showinpres)} class="fa fa-search res-icon-search" style={{color:"#FFDAA9"}} aria-hidden="true"></i>

                <i onClick={()=>nevi()} class="fa fa-user" style={{color:"#FFDAA9"}} aria-hidden="true"></i>
                <i onClick={()=>navigate("/wishlist")}class="fa fa-heart" style={{color:"#FFDAA9"}} aria-hidden="true"></i>
                 <i onClick={()=>{if(islogin){navigate("/cart")}else{navigate("/Login")}}} style={{color:"#FFDAA9"}} class="fa fa-shopping-bag" aria-hidden="true"></i>
                <i  onClick={()=>setShowhead(!showhead)} style={{color:"#FFDAA9"}} class="fa fa-bars nav-icon" aria-hidden="true"></i>
                </div>
                <div className='res-search-input'>
                <input ref={emailInputRef} style={{height:"30px",marginLeft:"-20%" ,visibility:showinpres?"":"hidden",width:showinpres?"160px":"0px", transition:"0.3s",outline:"none", borderRadius:3}} placeholder="Search"/>
                </div>
            </div>
        </div>
        <div className='head-category'>
        <div onClick={()=>navigate("/NewArrival")} ><label className='head-category-label'>New Arrival</label></div>
            <div onClick={()=>navigate("/Chikankari")} ><label className='head-category-label'>Chikankari</label></div>
            <div onClick={()=>navigate("/Suit")} ><label className='head-category-label'>Suit Sets</label></div>
            <div onClick={()=>navigate("/Kurtis")} ><label className='head-category-label'>Kurtis</label></div>
            <div onClick={()=>navigate("/Pastel")} ><label className='head-category-label'>Pastel</label></div>
             </div>

        {/* RESPONSIVE HEAD */}
        <div className='res-category' style={{width:"100%", height:showhead===true?300:0, display:"flex", overflow:"hidden",  flexDirection:"column",justifyContent:"space-evenly" ,alignItems:"center",transition:"1s",textTransform:"uppercase"}}>
            <div onClick={()=>navigate("/NewArrival")} ><label>New Arrival</label></div>
            <div onClick={()=>navigate("/Chikankari")} ><label>Chikankari</label></div>
            <div onClick={()=>navigate("/Suit")} ><label>Suit Sets</label></div>
            <div onClick={()=>navigate("/Kurtis")} ><label>Kurtis</label></div>
            <div onClick={()=>navigate("/Pastel")} ><label>Pastel</label></div>
            
            {/* <div onClick={()=>navigate("/")} style={{width:"8%", textAlign:"center"}}><label>swishboss</label></div> */}
        </div>
    </div> 
  )
}

export default Header