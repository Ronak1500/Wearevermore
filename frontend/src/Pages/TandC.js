import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function TandC() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div>
      <Header />
      <br />
      <br />
      <div style={{ width: "80%", marginLeft: "10%", textAlign: "center" }}>
        <b style={{ fontSize: 40, color:"#561D1F" }}>Terms & Conditions</b>
        <br />
        <br />
        <label style={{ textAlign: "justify" }}>
          The following are the terms and conditions which apply to the sales of
          made-to-measure and Ready Made garments and also to alterations to
          ready-made garments, purchased from Wear Evermore by the
          customers. 
          <br/><br/> • Made-to-measure garments are personally tailored to the
          Customer’s specifications and cannot be re-sold. Wear Evermore
          is, therefore, unable to accept any cancellation of an order for a
          made-to-measure item.<br/><br/> • Wear Evermore will make all reasonable
          efforts to accommodate any change to an existing order required by a
          Customer, but cannot guarantee to be able to do so, and reserves the
          right to make an additional charge to the customer for any changes.<br/> <br/> •
          Items purchased from Wear Evermore are non-exchangeable and
          non-refundable. <br/><br/> • Please note, the garment(s) purchased are hand
          embroidered and hand-finished. Due to the complex nature of the
          garment, embellishments may disintegrate from the fabric. This is not
          a manufacturing fault.<br/><br/> • Also, other fabrics such as chiffon and
          georgette are subject to pulls and rips as is the nature of the
          garment.<br/><br/> • Made-to-measure items and their alterations are custom-made
          items to which the distance selling provisions of The Consumer
          Contracts (Information, Cancellation and Additional Charges) 2013
          Regulations 2013 are not applicable.<br/><br/> • Orders for alterations to
          ready-made garments cannot be canceled and any variation to an
          alteration order may be subject to an additional charge. <br/><br/> • Should
          Wear Evermore agree, in its absolute discretion, to accept a
          cancellation, it reserves the right to make a cancellation charge to
          the Customer. <br/><br/> • In the event of any dispute as to whether a finished
          made-to-measure item or alteration to a ready-made item conforms with
          the Customer’s requirements, the description recorded on the
          Wear Evermore Order or Measurement Slip shall be considered
          final. <br/><br/> • Kindly note, the accuracy of measurements submitted to
          Wear Evermore by the Customer will be entirely at the
          Customer’s own risk. <br/><br/> • Wear Evermore cannot guarantee the
          delivery of a finished made-to-measure garment to the Customer within
          any particular time, but will normally deliver within 4 weeks of
          accepting the Customer’s order.<br/><br/> • Please note, ownership of any garment
          shall not pass to the Customer until paid for in full.
          <br/><br/><b style={{fontSize:20}}> SAFETY OF GARMENTS </b> <br/><br/>
           •The garment should be kept in a separate cover when not in
          use and should not be in contact with any other garment, as direct
          contact with another embroidered outfit may damage it. <br/><br/> • The garment
          must be kept out of contact with water and perfumes as they may cause
          discoloration. <br/><br/> • The garment must be Dry Cleaned by a reputed dry
          cleaner company only.
        </label>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default TandC;
