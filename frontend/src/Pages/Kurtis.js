import React, {useState, useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from './baseUrl'
function Kurtis() {
    useEffect(()=>{getLahangadata(); window.scrollTo(0,0)},[])
    const navigate = useNavigate() 
    const[ lahangaData, setLahangaData ] = useState([])
    
  
    const getLahangadata=()=>{
      axios.get(baseUrl+"product").then((res)=>setLahangaData(res.data.data.filter((i)=>i.category==="Kurtis")))
    }
  return (
    <div>
        <Header/>
        <div>
        <div style={{width:"100%", textAlign:"center",marginTop:"2%"}}>
              <label style={{fontSize:25, }}>KURTIS</label>
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", gap:"2.5%"}}>
                {lahangaData.map((i,n)=>
                <div className='products' 
                onClick={()=>{navigate("/ProductView"); localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img className='product-image' src={i.image} style={{width:"100%", height:"400px"}}/>
                  </div>
                  <div className='product-title' style={{width:"100%", height:"4.5vh", overflow:"hidden"}}>
                  <label>{i.name}</label><br/>
                  </div>
                  <label>Rs.{i.price}</label>
                </div>
            )}
              </div>
            </div>
            
            </div>
            
        <Footer/>
    
    </div>
  )
}

export default Kurtis