import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Career() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div>
      <Header />
      <br/>
      <br/>
      <div style={{ width: "80%", marginLeft: "10%", textAlign: "center" }}>
        <b style={{fontSize:40, color:"#561D1F"}}>Career</b>
        <br/>
        <br/>
        <label style={{textAlign:"justify"}}>
          We are a fast-growing start-up with an office in Indore and diverse
          team members. We are always looking for experienced, talented, and fun
          people who share our passion and goal - bringing the best of
          Indian-influenced style and brands to the world. If you would like to
          be involved, please send an email to socially.ecomm@gmail.com. Let us
          know a bit about yourself, why you'd be a good fit, and whether you're
          looking for a full-time, part-time, or internship position.
        </label>
      </div>
      <br/>
      <br/>
      <Footer />
    </div>
  );
}

export default Career;
