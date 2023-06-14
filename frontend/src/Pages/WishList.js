import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios'
import { baseUrl } from './baseUrl'
import { useNavigate } from 'react-router-dom'

function WishList() {
  useEffect(()=>{getwishlistData();window.scrollTo(0,0)},[])
  const navigate = useNavigate()
  const [wishdata, setWishdata] = useState([])

  const getwishlistData = () => {
    axios
      .get(baseUrl+"wishlist")
      .then((res) => setWishdata(res.data.data.filter((i)=>i.email===localStorage.getItem("userEmail"))));
  };
  const deletewishlistData = (x) => {
    axios
      .delete(baseUrl+"wishlist/" + x)
      .then(() => getwishlistData());
  };
  return (
    <div>
        <Header/>
        <br/>
      <br/>
      <div style={{ width: "80%", marginLeft: "10%", textAlign: "center" }}>
        <b style={{fontSize:40, color:"#561D1F"}}>WishList</b>
        <br/>
        <br/>
      </div>
      <div style={{width:"100%", textAlign:"center",marginTop:"2%"}}>
              {/* <label style={{fontSize:25, }}>NEW ARRIVALS</label> */}
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", gap:"2.5%"}}>
                {wishdata.map((i,n)=>
                <div className="products"
                >
                  <div onClick={()=>{navigate("/ProductView") ;localStorage.setItem("productdata",JSON.stringify(i))}} style={{width:"100%", height:"88%"}}>
                    <img className='product-image' src={i.image} style={{width:"100%", height:"400px"}}/>
                  </div>
                  <div className='product-title' style={{width:"100%", height:"4.5vh", overflow:"hidden"}}>
                  <label>{i.name}</label><br/>
                  </div>
                  <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
                  <label style={{fontWeight:"bold"}}>Rs.{i.price}</label>  
                  <label onClick={() => deletewishlistData(i._id)} style={{textDecoration:"underline", color:"grey", cursor:"pointer"}}>Remove</label>  
                  </div>
                </div>)}
              </div>
            </div>
      <br/>
      <br/>
        <Footer/>
    </div>
  )
}

export default WishList