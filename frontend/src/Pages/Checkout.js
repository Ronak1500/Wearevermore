import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import payment from "../payment.png";
import Header from "./Header";
import { baseUrl } from "./baseUrl";
import cart from "./cart.css";
import { Item } from "react-grid-carousel";

function Checkout() {
  useEffect(() => {
    getCartData();
    getUserData();
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [oID, setOID] = useState([]);
  const emailId = localStorage.getItem("userEmail");
  const [cartData, setCartData] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const getOrderData = () => {
    axios.get(baseUrl + "order").then((res) => setOrderList(res.data.data));
  };
  const totalPrice = cartData
    .map((i) => i.price * i.quantity)
    .reduce((a, b) => a + b, 0);

  const getCartData = () => {
    axios
      .get(baseUrl + "cart")
      .then((res) =>
        setCartData(
          res.data.data.filter(
            (i) => i.email === localStorage.getItem("userEmail")
          )
        )
      );
  };
  useEffect(() => {
    getOrderData();
  }, []);

  const [showpay, setShowpay] = useState(false);
  const [pay, setPay] = useState(0);

  const [email, setemail] = useState("");
  const [country, setcountry] = useState("");
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const [address, setaddress] = useState("");
  const [appartment, setappartment] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pin, setpin] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

  const PutUserdata = () => {
    axios
      .put(baseUrl + "userlist/" + id, {
        firstName: first !== "" ? first : userData?.firstName,
        lastName: last !== "" ? last : userData?.lastName,
        country: country,
        address: userData.address,
        appartment: userData.appartment,
        city: userData.city,
        state: userData.state,
        pinCode: userData.pinCode,
        phoneNumber: userData.phoneNumber,
        password: password,
      })
      .then(() => getUserData());
  };
  const [billingAddress, setBillingAddress] = useState([]);
  const updateAddress = () => {
    const item = {
      billingAddress: billingAddress,
    };
    axios.put(baseUrl + "userlist/" + userData._id, item);
    // .then(() => alert("hi"));
  };
  const [userData, setUserData] = useState({});
  const getUserData = () => {
    axios
      .get(baseUrl + "userlist")
      .then((res) =>
        setUserData(
          res.data.data.filter(
            (i) => i.email === localStorage.getItem("userEmail")
          )[0]
        )
      );
  };
  const [shipping, setShipping] = useState("");
  const [sameAs, setSameAs] = useState("");
  const id = localStorage.getItem("Uid");
  const [show, setShow] = useState(1);
  const [orderData, setOrderData] = useState([]);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const today = `${day}/${month + 1}/${year}`;
  const postOrder = () => {
    const item = {
      order: cartData,
      date: today,
      customerId: userData?.email,
      address: userData?.address,
      phoneNumber: userData?.phoneNumber,
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      shippingType: shipping,
      totalPrice: totalPrice,
      orderId: "#WE" + (orderList.length + 1),
      email: userData?.email,
      city: userData?.city,
      state: userData?.state,
      email: userData?.email,
    };
    axios
      .post(baseUrl + "order", item)
      .then(() =>
        cartData.map((j) =>
          axios.put(baseUrl + "product/qty/" + j.productId + "/" + j._id, {
            quantity: j.quantity,
          })
        )
      );
  };

  return (
    <div>
      <div className="checkout-div">
        <div
          className="checkout-details"
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            padding: "5% 5% 2% 7%",
          }}
        >
          <h2 style={{ color: "#561D1F" }} onClick={() => navigate("/")}>
            WEAR EVERMORE
          </h2>
          {/* {JSON.stringify(userData)} */}
          {userData?.address}
          {show !== 4 ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "2%",
                color: "#1F8DD6",
              }}
            >
              <label onClick={() => navigate("/Cart")}>Cart</label>
              <label>›</label>
              <label
                style={{ color: show === 1 ? "black" : "#1F8DD6" }}
                onClick={() => setShow(1)}
              >
                Information
              </label>
              <label>›</label>
              <label
                style={{ color: show === 2 ? "black" : "#1F8DD6" }}
                onClick={() => setShow(2)}
              >
                Shipping
              </label>
              <label>›</label>
              <label
                style={{ color: show === 3 ? "black" : "#1F8DD6" }}
                onClick={() => setShow(3)}
              >
                Payment
              </label>
            </div>
          ) : null}
          <div style={{ width: "100%", height: "100%" }}>
            <br />
            {/* Information */}
            {show === 1 ? (
              <div>
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <label style={{ fontSize: 20 }}>Contact information</label>
                  <small>
                    Already have an account?
                    <b
                      onClick={() => navigate("/Login")}
                      style={{ color: "#4A92D7" }}
                    >
                      {" "}
                      Log in
                    </b>{" "}
                  </small>
                </div>
                <input
                  style={{ width: "100%", height: "7vh", borderRadius: 3 }}
                  placeholder="Email"
                  value={userData?.email}
                />
                <div
                  style={{ width: "100%", display: "flex", marginTop: "1%" }}
                >
                  <input style={{ width: "3%" }} type="checkbox" />
                  <label style={{ marginLeft: "2%" }}>
                    Email me with news and offers
                  </label>
                </div>
                <br />
                {/* {JSON.stringify(userData)} */}
                <label style={{ fontSize: 20 }}>Shipping address</label>
                <select
                  value={userData?.country}
                  onChange={(e) => setcountry(e.target.value)}
                  style={{
                    paddingLeft: "2%",
                    width: "100%",
                    height: "7vh",
                    borderRadius: 3,
                    outline: "none",
                    borderColor: "silver",
                  }}
                >
                  <option value="IN" selected disabled>
                    Country
                  </option>
                  <option value="IN">India</option>
                  <option disabled="" value="">
                    ---
                  </option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AG">Antigua &amp; Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AC">Ascension Island</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BA">Bosnia &amp; Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="VG">British Virgin Islands</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="BQ">Caribbean Netherlands</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo - Brazzaville</option>
                  <option value="CD">Congo - Kinshasa</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Côte d’Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czechia</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="SZ">Eswatini</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong SAR</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="XK">Kosovo</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao SAR</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar (Burma)</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MK">North Macedonia</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PS">Palestinian Territories</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn Islands</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Réunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">São Tomé &amp; Príncipe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">
                    South Georgia &amp; South Sandwich Islands
                  </option>
                  <option value="KR">South Korea</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="BL">St. Barthélemy</option>
                  <option value="SH">St. Helena</option>
                  <option value="KN">St. Kitts &amp; Nevis</option>
                  <option value="LC">St. Lucia</option>
                  <option value="MF">St. Martin</option>
                  <option value="PM">St. Pierre &amp; Miquelon</option>
                  <option value="VC">St. Vincent &amp; Grenadines</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard &amp; Jan Mayen</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad &amp; Tobago</option>
                  <option value="TA">Tristan da Cunha</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks &amp; Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UM">US Outlying Islands</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VA">Vatican City</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="WF">Wallis &amp; Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
                <br />
                <br />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    value={first !== "" ? first : userData?.firstName}
                    style={{ width: "48%", height: "7vh", borderRadius: 3 }}
                    placeholder="Frist Name"
                    onChange={(e) => setfirst(e.target.value)}
                  />
                  <input
                    value={last !== "" ? last : userData?.lastName}
                    style={{ width: "48%", height: "7vh", borderRadius: 3 }}
                    placeholder="Last Name"
                    onChange={(e) => setlast(e.target.value)}
                  />
                </div>
                <br />
                <input
                  value={userData?.address}
                  onChange={(e) =>
                    setUserData({ ...userData, address: e.target.value })
                  }
                  style={{ width: "100%", height: "7vh", borderRadius: 3 }}
                  placeholder="Address"
                />
                <br />
                <br />
                <input
                  value={userData?.appartment}
                  onChange={(e) =>
                    setUserData({ ...userData, appartment: e.target.value })
                  }
                  style={{ width: "100%", height: "7vh", borderRadius: 3 }}
                  placeholder="Apartment, suite, etc."
                />
                <br />
                <br />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    value={userData?.city}
                    onChange={(e) =>
                      setUserData({ ...userData, city: e.target.value })
                    }
                    style={{ width: "32%", height: "7vh", borderRadius: 3 }}
                    placeholder="City"
                  />
                  <select
                    value={userData?.state}
                    onChange={(e) =>
                      setUserData({ ...userData, state: e.target.value })
                    }
                    style={{
                      width: "32%",
                      height: "7vh",
                      borderRadius: 3,
                      borderColor: "silver",
                      outline: "none",
                    }}
                  >
                    <option value="AN" disabled selected>
                      State
                    </option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CH">Chandigarh</option>
                    <option value="CG">Chhattisgarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="LA">Ladakh</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OR">Odisha</option>
                    <option value="PY">Puducherry</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TS">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="UK">Uttarakhand</option>
                    <option value="WB">West Bengal</option>
                  </select>
                  <input
                    value={userData?.pinCode}
                    onChange={(e) =>
                      setUserData({ ...userData, pinCode: e.target.value })
                    }
                    style={{ width: "32%", height: "7vh", borderRadius: 3 }}
                    placeholder="PIN Code"
                  />
                </div>
                <br />
                <input
                  value={userData?.phoneNumber}
                  onChange={(e) =>
                    setUserData({ ...userData, phoneNumber: e.target.value })
                  }
                  style={{ width: "100%", height: "7vh", borderRadius: 3 }}
                  placeholder="Phone"
                />
                <div
                  style={{ width: "100%", display: "flex", marginTop: "1%" }}
                >
                  <input
                    style={{ width: "3%", cursor: "pointer" }}
                    type="checkbox"
                  />
                  <label style={{ marginLeft: "2%" }}>
                    Save this information for next time
                  </label>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <label
                    onClick={() => navigate("/Cart")}
                    style={{ color: "#4267B2" }}
                  >
                    « Return to Cart
                  </label>
                  <button
                    style={{
                      width: "30%",
                      height: "8vh",
                      backgroundColor: "#1773b0",
                      color: "white",
                      border: "none",
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      PutUserdata();
                      setShow(2);
                    }}
                  >
                    Continue to shipping
                  </button>
                </div>
              </div>
            ) : null}
            {/* Shipping */}
            {show === 2 ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "5% 5% 2% 7%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "15vh",
                    border: "1px solid lightgrey",
                    borderRadius: 5,
                    padding: "0% 2% 0% 2%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "50%",
                      borderBottom: "1px solid lightgrey",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <small>Contact</small>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <small>{userData?.phoneNumber}</small>
                    </div>
                    <div
                      onClick={() => setShow(1)}
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        justifyContent: "end",
                        color: "#1F8DD6",
                      }}
                    >
                      <small>Change</small>
                    </div>
                  </div>
                  <div
                    style={{ width: "100%", height: "50%", display: "flex" }}
                  >
                    <div
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <small>Ship to</small>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <small>{userData?.address}</small>
                    </div>
                    <div
                      onClick={() => setShow(1)}
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        justifyContent: "end",
                        color: "#1F8DD6",
                      }}
                    >
                      <small>Change</small>
                    </div>
                  </div>
                </div>
                <br />
                <label style={{ fontSize: 20 }}>Shipping Method</label>
                <div
                  style={{
                    width: "100%",
                    height: "15vh",
                    border: "1px solid lightgrey",
                    borderRadius: 5,
                    padding: "0% 2% 0% 2%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "50%",
                      borderBottom: "1px solid lightgrey",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "15%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <input
                        checked={shipping === "Free" ? true : false}
                        onClick={() => setShipping("Free")}
                        type="radio"
                      />
                    </div>
                    <div
                      style={{
                        width: "60%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <small>Free Shipping (Cash on Delivery)</small>
                    </div>
                    <div
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        justifyContent: "end",
                      }}
                    >
                      <small>Free</small>
                    </div>
                  </div>
                  <div
                    style={{ width: "100%", height: "50%", display: "flex" }}
                  >
                    <div
                      style={{
                        width: "15%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <input
                        checked={shipping === "Standard" ? true : false}
                        onClick={() => setShipping("Standard")}
                        type="radio"
                      />
                    </div>
                    <div
                      style={{
                        width: "60%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <small>Standard</small>
                    </div>
                    <div
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        justifyContent: "end",
                      }}
                    >
                      <small>Free</small>
                    </div>
                  </div>
                </div>
                <br />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <label
                    onClick={() => setShow(1)}
                    style={{ color: "#4267B2" }}
                  >
                    « Return to information
                  </label>
                  <button
                    style={{
                      width: "35%",
                      height: "8vh",
                      backgroundColor: "#1773b0",
                      color: "white",
                      border: "none",
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
                    onClick={() => setShow(3)}
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            ) : null}
            {/* Payment */}
            {show === 3 ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "5% 5% 2% 7%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "22.5vh",
                    border: "1px solid lightgrey",
                    borderRadius: 5,
                    padding: "0% 2% 0% 2%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "33%",
                      borderBottom: "1px solid lightgrey",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <small>Contact</small>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <small>{userData?.phoneNumber}</small>
                    </div>
                    <div
                      onClick={() => setShow(1)}
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        justifyContent: "end",
                        color: "#1F8DD6",
                      }}
                    >
                      <small>Change</small>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "33%",
                      borderBottom: "1px solid lightgrey",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <small>Ship to</small>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <small>
                        {userData?.address},{userData?.city}
                      </small>
                    </div>
                    <div
                      onClick={() => setShow(1)}
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        justifyContent: "end",
                        color: "#1F8DD6",
                      }}
                    >
                      <small>Change</small>
                    </div>
                  </div>
                  <div
                    style={{ width: "100%", height: "33%", display: "flex" }}
                  >
                    <div
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <small>Method</small>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <small>{shipping}</small>
                    </div>
                    <div
                      onClick={() => setShow(2)}
                      style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        justifyContent: "end",
                        color: "#1F8DD6",
                      }}
                    >
                      <small>Change</small>
                    </div>
                  </div>
                </div>
                <br />
                <label style={{ fontSize: 20 }}>Payment</label>
                <br />
                <small>All transactions are secure and encrypted.</small>
                <div
                  style={{
                    width: "100%",
                    border: "1px solid lightgrey",
                    borderRadius: 5,
                  }}
                >
                  {/* <img style={{ width: "100%" }} src={pay} /> */}
                  <div
                    style={{
                      width: "100%",
                      height: "50%",
                      borderBottom: "1px solid lightgrey",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "10%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <input
                        checked={pay === 1}
                        onClick={() => {
                          setShowpay(true);
                          setPay(1);
                        }}
                        type="radio"
                      />
                    </div>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <label>
                        Razorpay Secure (UPI, Cards, Wallets, NetBanking)
                      </label>
                    </div>
                    <div style={{ width: "35%" }}>
                      <img
                        style={{ width: 50 }}
                        src="https://cdn0.iconfinder.com/data/icons/major-credit-cards-colored/48/JD-08-256.png"
                      />
                      <img
                        style={{ width: 30 }}
                        src="https://cdn4.iconfinder.com/data/icons/logos-3/565/Mastercard-logo-256.png"
                      />
                      <img
                        style={{ width: 40, marginLeft: "3%" }}
                        src="https://cdn0.iconfinder.com/data/icons/payment-method/480/rupay_payment_card_bank-256.png"
                      />
                      <img
                        style={{ width: 40, marginLeft: "3%" }}
                        src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-64.png"
                      />
                      <small style={{ marginLeft: "5%" }}>
                        and many more...
                      </small>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: showpay ? 175 : 0,
                      overflow: "hidden",
                      transition: "0.5s",
                    }}
                  >
                    <img style={{ width: "100%" }} src={payment} />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "10vh",
                      borderBottom: "1px solid lightgrey",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "10%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <input
                        checked={pay === 2}
                        onClick={() => {
                          setShowpay(false);
                          setPay(2);
                        }}
                        type="radio"
                      />
                    </div>
                    <div
                      style={{
                        width: "50%",
                        height: "11vh",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <label>Cash On Delivery (COD) </label>
                    </div>
                  </div>
                </div>

                <br />
                <label style={{ fontSize: 20 }}>Billing Address</label>
                <br />
                <small>
                  Select the address that matches your card or payment method.
                </small>
                <div
                  style={{
                    width: "100%",
                    height: "15vh",
                    border: "1px solid lightgrey",
                    borderRadius: 5,
                    padding: "0% 2% 0% 2%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "50%",
                      borderBottom: "1px solid lightgrey",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "15%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <input
                        onClick={() => {
                          setBillingAddress([
                            ...billingAddress,
                            userData.address,
                          ]);
                          updateAddress();
                        }}
                        type="radio"
                      />
                    </div>
                    <div
                      style={{
                        width: "60%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <small>Same as shipping address</small>
                    </div>
                  </div>
                  <div
                    style={{ width: "100%", height: "50%", display: "flex" }}
                  >
                    <div
                      style={{
                        width: "15%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 20,
                        color: "grey",
                      }}
                    >
                      <input type="radio" />
                    </div>
                    <div
                      style={{
                        width: "60%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 17,
                      }}
                    >
                      <small>Use a different billing address</small>
                    </div>
                  </div>
                </div>
                <br />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <label
                    onClick={() => setShow(2)}
                    style={{ color: "#4267B2" }}
                  >
                    « Return to Shipping
                  </label>

                  <button
                    onClick={() => {
                      setOrderData([
                        {
                          ...orderData,
                          cartData,
                          ...orderData,
                          totalPrice: totalPrice,
                          ...orderData,
                          shippingType: shipping,
                        },
                      ]);
                      postOrder();
                      updateAddress();
                      setShow(4);
                    }}
                    style={{
                      width: "35%",
                      height: "8vh",
                      backgroundColor: "#1773b0",
                      color: "white",
                      border: "none",
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            ) : null}

            {show === 4 ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "5% 5% 2% 7%",
                }}
              >
                <div>
                  {/* <img style={{width:40}} src="https://cdn4.iconfinder.com/data/icons/essentials-72/24/040_-_Tick-256.png"/> */}
                  <label
                    style={{
                      fontSize: 22,
                      color: "#561D1F",
                      fontWeight: "bold",
                    }}
                  >
                    Thank you, your order has been placed.
                  </label>
                </div>
                <b>OrderID :- </b>
                <label>{"#WE" + (orderList.length + 1)}</label>
                <br/>
                <b>
                  Shipping To
                </b>
                <br/>
                <label>
                  {userData.address}, {userData.appartment},  {userData.city}{" "},
                  ({userData.state}) 
                </label>
              </div>
            ) : null}
          </div>
        </div>

        {/* CART PART */}

        <div
          className="checkout-cart"
          style={{
            width: "45%",
            backgroundColor: "#F5F5F5",
            minHeight: "120vh",
            borderLeft: "1px solid lightgrey",
          }}
        >
          <div
            style={{
              width: "85%",
              minHeight: "20vh",
              borderBottom: "1px solid grey",
            }}
          >
            {cartData.map((i) => (
              <div style={{ width: "100%", display: "flex", margin: "3%" }}>
                <div
                  style={{
                    width: "20%",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderRadius: 5,
                    border: "0.5px solid lightgrey",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: "grey",
                      borderRadius: "50%",
                      position: "absolute",
                      top: -10,
                      right: -10,
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    {i?.quantity}
                  </div>
                  <img style={{ width: "50%" }} src={i?.thumbnailImage} />
                </div>
                <div
                  style={{
                    width: "55%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: "3%",
                  }}
                >
                  <b>{i?.brand}</b>
                  <label style={{ color: "grey" }}>{i?.size}</label>
                </div>
                <div
                  style={{
                    width: "20%",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <label>₹{i?.price}</label>
                </div>
              </div>
            ))}
          </div>
          { show !==4?
          <div
            style={{
              width: "85%",
              height: "15vh",
              borderBottom: "1px solid grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <input
              style={{ width: "75%", height: "7vh", borderRadius: 4 }}
              placeholder="Discount Code"
            />
            <button
              style={{
                width: "20%",
                height: "7vh",
                borderRadius: 4,
                border: "none",
                backgroundColor: "grey",
              }}
            >
              Apply
            </button>
          </div>:null}
          <div
            style={{
              width: "85%",
              height: "15vh",
              borderBottom: "1px solid grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label>Subtotal</label>
              <b>Rs.{totalPrice}</b>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label>Shipping</label>
              <b>{shipping}</b>
            </div>
          </div>
          <div
            style={{
              width: "85%",
              height: "10vh",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              paddingTop: "3%",
            }}
          >
            <b style={{ fontSize: 25 }}>Total</b>
            <b style={{ fontSize: 30 }}>Rs.{totalPrice}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
