import React from 'react'
import Footer from './Footer'
import Header from './Header'
import chart from "../chart.jpg"

function SizeChart() {
  return (
    <div>
        <Header/>
        <div style={{width:"100%", height:"150vh", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label style={{fontSize:40}}>Size Chart</label>
                <img src={chart}/>
        </div>
        <Footer/>
    </div>
  )
}

export default SizeChart