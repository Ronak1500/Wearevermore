import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'

function CustCharge() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div>
        <Header/>
        <br/>
      <br/>
      <div style={{ width: "80%", marginLeft: "10%", textAlign: "center" }}>
        <b style={{fontSize:40, color:"#561D1F"}}>Customization Charges</b>
        <br/>
        <br/>
        <div style={{textAlign:"start"}}>
        <label style={{textAlign:"justify"}}>
        <b>BLOUSE STITCHING</b><br/><br/>

• Blouse Stitching for choli style regular blouse Rs 2,100/- USD 35<br/>
• Designer Blouse Rs 3,300 / USD 55<br/>
<br/><b>PETTICOAT</b>
<br/><br/>
• Satin/crepe petticoat: INR 600 / USD 10<br/>
• Shimmer petticoat: INR 900 / USD 15<br/>
<br/><br/><b>SLEEVES</b>
<br/><br/>
• Plain net ¾ / half / full sleeves with no work: INR 600 / USD 10<br/>
<br/><br/><b>BACK COVERING</b><br/>
<br/>
• with net fabric INR 900 / USD 15<br/>
• with net fabric and lining INR 1,200 / USD 20<br/>
<br/><br/><b>DUPATTA</b><br/>
<br/>
• Plain net dupatta with satin border INR 1,800 / USD 30<br/>
• Net dupatta with Small border and butti work: INR 6,000 / USD 100<br/>
• Bridal net dupatta with work INR 9,600 - 18,000 / USD 160 - 300<br/>
• Net with ruffle INR 4,200 / USD 70<br/>
• Net dupatta in abla work with cut dana border. INR 6,000 / USD 100<br/>
<br/><br/><b>TASSEL</b>
<br/>
• Regular Fabric or Golden Balls set - INR 600/ USD 10<br/>
• Heavy Latkan RS 1800/ USD 25.<br/>
• Designer embroidery Latkan 3,000/ USD 50<br/>
• Personalised latkan RS 4,200 / USD 70<br/>
<br/><br/><b>MASK</b><br/>

• Embroidered Mask - Rs. 2100 / USD 35<br/>
• Plain fabric Mask - Free
        </label></div>
      </div>
      <br/>
      <br/>
        <Footer/>
    </div>
  )
}

export default CustCharge