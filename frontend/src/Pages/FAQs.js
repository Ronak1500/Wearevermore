import React, {useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'

function FAQs() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div>
        <Header/>
        <br/>
      <br/>
      <div style={{ width: "80%", marginLeft: "10%", textAlign: "center" }}>
        <b style={{fontSize:40, color:"#561D1F"}}>FAQs</b>
        <br/>
        <br/>
        <label style={{textAlign:"justify"}}>
        
        </label>
      </div>
      <br/>
      <br/>
        <Footer/>
    </div>
  )
}

export default FAQs