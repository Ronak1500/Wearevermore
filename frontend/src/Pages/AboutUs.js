import React, {useEffect} from "react";
import Footer from "./Footer";
import Header from "./Header";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Header />
      <div style={{ width: "80%", marginLeft:"10%", textAlign:"center"  }}>
        <br/>
        <br/>
        <b style={{fontSize:30}}>About Us</b>
        <br/>
        <br/>
        <br/>
        <label style={{textAlign:"justify"}}>
          Wear Evermore, the brand that houses one of the exclusive
          ranges of ethnic wear in Lehenga, Jumpsuits, and Sarees which makes it
          one of the most sought-after shopping destinations for women.
          Wear Evermore stands for ethnicity but with a contemporary
          twist that helps the bride experience a fairy tale wedding. Everything
          is crafted with an incredible range of fabrics and appliqué work. The
          classic collections of its timeless designs and ensembles for every
          woman are versatile and aesthetically appealing.
          <br/>
          <br/>
           The brand believes in
          making special memories even more precious so that every woman
          celebrates her occasion with full zing. With interiors that match the
          brands' personality and courteous staff, shopping at
          Wear Evermore will indeed give every lady a wonderful shopping
          experience.
        </label>
      </div>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
}

export default AboutUs;
