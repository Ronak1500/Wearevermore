import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { baseUrl } from './baseUrl'

function Celebrities() {
    useEffect(()=>{getLahangadata(); window.scrollTo(0,0)},[])
    const navigate = useNavigate()
    const[ lahangaData, setLahangaData ] = useState([])
    const getLahangadata=()=>{
        axios.get(baseUrl+"lahanga").then((res)=>setLahangaData(res.data.data))
      }
  return (
    <div>
        <Header/>
        <div>
        <div style={{width:"100%", textAlign:"center",marginTop:"2%"}}>
              <label style={{fontSize:25, }}>CELEBRITIES</label>
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                {lahangaData.map((i,n)=>{
                  if(n<8){
                    return(
                <div className='products' 
                onClick={()=>{navigate("/ProductView"); localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img src={i.thumbnailImage} style={{width:"100%", height:"100%"}}/>
                  </div>
                  <label>{i.brand}</label><br/>
                  <label>Rs.{i.price.value}</label>
                </div>)}
            })}
              </div>
            </div>
            <div style={{width:"100%", textAlign:"center", marginTop:"2%", marginBottom:"2%"}}>
              {/* <label style={{fontSize:25, }}>COORDINATE</label> */}
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                {lahangaData.map((i,n)=>{
                  if(n>7&n<12){
                    return(
                <div className='products' 
                onClick={()=>{navigate("/ProductView"); localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img src={i.thumbnailImage} style={{width:"100%", height:"100%"}}/>
                  </div>
                  <label>{i.brand}</label><br/>
                  <label>Rs.{i.price.value}</label>
                </div>)}
            })}
              </div>
            </div>
            <div style={{width:"100%", textAlign:"center", marginTop:"2%", marginBottom:"2%"}}>
              {/* <label style={{fontSize:25, }}>SAREES</label> */}
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                {lahangaData.map((i,n)=>{
                  if(n>13&n<18){
                    return(
                <div className='products' 
                onClick={()=>{navigate("/ProductView"); localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img src={i.thumbnailImage} style={{width:"100%", height:"100%"}}/>
                  </div>
                  <label>{i.brand}</label><br/>
                  <label>Rs.{i.price.value}</label>
                </div>)}
            })}
              </div>

            </div>
            <div style={{width:"100%", textAlign:"center", marginTop:"2%", marginBottom:"2%"}}>
              {/* <label style={{fontSize:25, }}>BESTSELLER</label> */}
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                {lahangaData.map((i,n)=>{
                  if(n>18&n<27){
                    return(
                <div className='products' 
                onClick={()=>{navigate("/ProductView"); localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img src={i.thumbnailImage} style={{width:"100%", height:"100%"}}/>
                  </div>
                  <label>{i.brand}</label><br/>
                  <label>Rs.{i.price.value}</label>
                </div>)}
            })}
              </div>

            </div>
            <div style={{width:"100%", textAlign:"center", marginTop:"2%", marginBottom:"2%"}}>
              {/* <label style={{fontSize:25, }}>ANARKALI</label> */}
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                {lahangaData.map((i,n)=>{
                  if(n>28&n<33){
                    return(
                <div className='products' 
                onClick={()=>{navigate("/ProductView"); localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img src={i.thumbnailImage} style={{width:"100%", height:"100%"}}/>
                  </div>
                  <label>{i.brand}</label><br/>
                  <label>Rs.{i.price.value}</label>
                </div>)}
            })}
              </div>

            </div>
            <div style={{width:"100%", textAlign:"center", marginTop:"2%", marginBottom:"2%"}}>
              {/* <label style={{fontSize:25, }}>CELEBRITY CLOSET</label> */}
              <div style={{width:"90%", marginLeft:"5%", display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                {lahangaData.map((i,n)=>{
                  if(n>34&n<39){
                    return(
                <div className='products' 
                onClick={()=>{navigate("/ProductView"); localStorage.setItem("productdata",JSON.stringify(i))}}>
                  <div style={{width:"100%", height:"88%"}}>
                    <img src={i.thumbnailImage} style={{width:"100%", height:"100%"}}/>
                  </div>
                  <label>{i.brand}</label><br/>
                  <label>Rs.{i.price.value}</label>
                </div>)}
            })}
              </div>

            </div>
            </div>

        <Footer/>
    </div>
  )
}

export default Celebrities