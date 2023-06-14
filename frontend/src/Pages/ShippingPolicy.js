import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function ShippingPolicy() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div>
      <Header />
      <br />
      <br />
      <div style={{ width: "80%", marginLeft: "10%", textAlign: "center" }}>
        <b style={{ fontSize: 40, color:"#561D1F" }}>Shipping Policy</b>
        <br />
        <br />
        <label style={{ textAlign: "justify" }}>
          <b>SHIPPING METHODS AND COSTS</b>
          <br />
          <br />
          For more information, please contact our customer care service at
          socially.ecomm@gmail.com or +91 97529 29335.
          <br />
          <br />
          <b>IMPORTANT INFORMATION</b>
          <br />
          <br />
          Order cut-off times are provided as guidelines only, and do not take
          into account possible delays caused by payment authorization. We aim
          to dispatch all orders within 10-15 days with the exception of sale
          periods where it may take up to 15 days. Estimated delivery times are
          to be used as a guide only and commence from the date of dispatch. We
          are not responsible for any delays caused by destination customs
          clearance processes. We are unable to redirect orders once items have
          been dispatched. All orders require a signature upon receipt.
          <br />
          <br />
          <b>FREE SHIPPING</b>
          <br />
          <br />
          Free shipping is only applicable if the order value exceeds ₹ 15000.
          <br />
          <br />
          <b>INSURANCE</b>
          <br />
          <br />
          Ware Evermore insures each purchase during the time it is in
          transit until it is delivered to you. We require a signature for any
          goods delivered, at which point responsibility for your purchased
          goods passes to you. If you have specified a recipient who is not you
          for delivery purposes (for example as a gift) then you accept that
          evidence of a signature by them (or at that delivery address) is
          evidence of delivery and fulfilment by Ware Evermore and
          transfer of responsibility in the same way.
          <br />
          <br />
          <b>TAXES & DUTIES</b>
          <br />
          <br />
          For Indian customers, product prices displayed are inclusive of all
          taxes and duties.
        </label>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ShippingPolicy;
