import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function ReturnPolicy() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div>
      <Header />
      <br />
      <br />
      <div style={{ width: "80%", marginLeft: "10%", textAlign: "center" }}>
        <b style={{ fontSize: 40, color:"#561D1F" }}>Return Policy</b>
        <br />
        <br />
        <label style={{ textAlign: "justify" }}>
          <b>
            Our terms and conditions pertaining to returns and exchange is as
            follows:
          </b>
          <br />
          <br />• Products once delivered cannot be returned. Incase of damages
          from our end, it can only be exchanged for another product of the same
          SKU.
          <br /><br />• Customised styles are non-exchangeable.
          <br /><br />• Goods are faulty if they are received damaged. Items that are
          damaged as a result of normal wear and tear are not considered to be
          faulty. If you would like to exchange a faulty item instead of
          obtaining store credit, please be aware that we can only replace it
          for the same product in the same size, subject to availability. Where
          possible, we will offer to repair faulty items. We have made every
          effort to display as accurately as possible the colours of our
          products that appear on the Site. However, as computer monitors vary,
          we cannot guarantee that your monitor's display of any colour will be
          completely accurate.
          <br /><br />• Once a customer emails us for alteration, and we get the pick
          up done, he/she can't ask for store credit.
          <br /><br />• Products purchased online can be picked up at the store. One
          should intimate us (socially.ecomm@gmail.com) the exact date when they
          need to pick up, so accordingly we can arrange it in store.
          <br />
          <br />
          <b>Cancellation : </b>
          <br /><br />
          We shall not be able to process the cancellation if the order/orders
          are processed.
          <br /><br />
          <b>Customer Care : </b>
          <br /><br />
          Ph: +91 97529 29335 <br /><br />
          (Between 10 AM to 6 PM, Monday to Friday, and 1 PM to 5 PM on
          Saturday.) <br /><br />
          Email: socially.ecomm@gmail.com
        </label>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ReturnPolicy;
