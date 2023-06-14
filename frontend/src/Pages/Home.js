import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import Carousel from 'react-grid-carousel'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from './baseUrl'

function Home() {
  useEffect(()=>{getLahangadata(); window.scrollTo(0,0)},[])
  const navigate = useNavigate()
  const[ lahangaData, setLahangaData ] = useState([])
  const[ lahangaData1, setLahangaData1 ] = useState([])
  const getLahangadata=()=>{
    axios.get(baseUrl+"product").then((res)=>{
      setLahangaData(res.data.data.reverse())
    })
  }
  
  return (
    <div>
        <Header/>
        <Carousel cols={1} rows={1} gap={0} autoplay={4000} loop 
        // arrowLeft arrowRight 
        >
          <Carousel.Item>
            <img width="100%"   src="https://cdn.shopify.com/s/files/1/0535/5182/5079/files/swish_ethereal_desktop_1512x.jpg?v=1674584495" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%"  src="https://cdn.shopify.com/s/files/1/0535/5182/5079/files/co-ord_banner_d_1512x.jpg?v=1675786364" />
          </Carousel.Item>
         </Carousel>
            <div style={{width:"100%", textAlign:"center",marginTop:"2%"}}>
              <label style={{fontSize:25, }}>NEW ARRIVALS</label>
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", gap:"2.5%"}}>
                {lahangaData.map((i,n)=>
                <div className="products"
                onClick={()=>{navigate("/ProductView") ;localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img className='product-image' src={i.image[0]} style={{width:"100%", height:"400px"}}/>
                  </div>
                  <div className='product-title' style={{width:"100%", height:"4.5vh", overflow:"hidden"}}>
                  <label>{i.name}</label><br/>
                  </div>
                  <label style={{fontWeight:"bold"}}>Rs.{i.price}</label>  
                </div>)}
              </div>
            </div>
            <div style={{width:"100%", textAlign:"center", marginTop:"2%", marginBottom:"2%"}}>
              <label style={{fontSize:25, }}>CHIKANKARI</label>
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", gap:"2.5%"}}>
                {lahangaData.filter((i)=>i.category==="Chikankari").map((i,n)=>
                 
                <div className="products" 
                onClick={()=>{navigate("/ProductView") ;localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img className='product-image' src={i.image[0]} style={{width:"100%", height:"400px"}}/>
                  </div>
                  <div className='product-title' style={{width:"100%", height:"4.5vh", overflow:"hidden"}}>
                  <label>{i.name}</label><br/>
                  </div>
                  <label style={{fontWeight:"bold"}}>Rs.{i.price}</label>  
                </div>)}
              </div>
            </div>
            <div style={{width:"100%", textAlign:"center", marginTop:"2%", marginBottom:"2%"}}>
              <label style={{fontSize:25, }}>SUIT SETS</label>
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", gap:"2.5%"}}>
                {lahangaData.filter((i)=>i.category==="Suit Sets").map((i,n)=>
                <div className="products" 
                onClick={()=>{navigate("/ProductView") ;localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img className='product-image' src={i.image[0]} style={{width:"100%", height:"400px"}}/>
                  </div>
                  <div className='product-title' style={{width:"100%", height:"4.5vh", overflow:"hidden"}}>
                  <label>{i.name}</label><br/>
                  </div>
                  <label style={{fontWeight:"bold"}}>Rs.{i.price}</label>  
                </div>)}
            
              </div>

            </div>
            <div style={{width:"100%", textAlign:"center", marginTop:"2%", marginBottom:"2%"}}>
              <label style={{fontSize:25, }}>KURTIS</label>
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", gap:"2.5%"}}>
                {lahangaData.filter((i)=>i.category==="Kurtis").map((i,n)=>
                <div className="products" 
                onClick={()=>{navigate("/ProductView") ;localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img className='product-image' src={i.image[0]} style={{width:"100%", height:"400px"}}/>
                  </div>
                  <div className='product-title' style={{width:"100%", height:"4.5vh", overflow:"hidden"}}>
                  <label>{i.name}</label><br/>
                  </div>
                  <label style={{fontWeight:"bold"}}>Rs.{i.price}</label>  
                </div>)}
           
              </div>

            </div>
            <div style={{width:"100%", textAlign:"center", marginTop:"2%", marginBottom:"2%"}}>
              <label style={{fontSize:25, }}>PASTEL</label>
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", gap:"2.5%"}}>
                {lahangaData.filter((i)=>i.category==="Pastel").map((i,n)=>
                <div className="products" 
                onClick={()=>{navigate("/ProductView") ;localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img className='product-image' src={i.image[0]} style={{width:"100%", height:"400px"}}/>
                  </div>
                  <div className='product-title' style={{width:"100%", height:"4.5vh", overflow:"hidden"}}>
                  <label>{i.name}</label><br/>
                  </div>
                  <label style={{fontWeight:"bold"}}>Rs.{i.price}</label>  
                </div>)}
            
              </div>

            </div>
            
         <Footer/>
    </div>
  )
}

export default Home