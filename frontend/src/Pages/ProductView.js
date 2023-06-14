import React, { useEffect, useState } from "react";
import axios from "axios";
import "./productview.css";
import Header from "./Header";
import Footer from "./Footer";
import chart from "../chart.jpg";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./baseUrl";
import {Rings} from "react-loader-spinner";


function ProductView() {
  useEffect(() => {
    getLahangadata();
    window.scrollTo(0, 0);
  }, []);
  const[loader,setLoader]=useState(false)

  const navigate = useNavigate();
  const list = localStorage.getItem("productdata");
  const [data,  
  ] = useState(JSON.parse(list));
  const [size, setSize] = useState("XS");
  const [sizecolor, setSizecolor] = useState(false);
  const [sizecolor1, setSizecolor1] = useState(false);
  const [sizecolor2, setSizecolor2] = useState(false);
  const [sizecolor3, setSizecolor3] = useState(false);
  const [sizecolor4, setSizecolor4] = useState(false);

  const [showChart, setShowChart] = useState(false);
  const [lahangaData, setLahangaData] = useState([]);
  const userEmail = localStorage.getItem("userEmail");

  const islogin= localStorage.getItem("user")

  const nevi=()=>{
    if(islogin==="yes"){
        navigate("/Checkout")
    }else{
        navigate("/Login1")
    }
}

  const postCartData = () => {
    setLoader(true)
    const item = {
      productId:data?._id,
      title: data?.name,
      brand: data?.brand,
      quantity: 1,
      thumbnailImage: data?.image[0],
      price: data?.price,
      size: size,
      email: userEmail,
    };
    axios.post(baseUrl + "cart", item).then(()=>navigate("/Cart"))
  };
  const WishlistData = () => {
    
    const item = {
      productId:data?._id,
      title: data?.name,
      brand: data?.brand,
      quantity: 1,
      image: data?.image[0],
      price: data?.price,
      size: size,
      email: userEmail,
    };
    axios.post(baseUrl + "wishlist", item).then(()=>navigate("/Wishlist"))
  };

  const getLahangadata = () => {
    axios.get(baseUrl + "product").then((res) => setLahangaData(res.data.data));
  };

  return (
    <div>
      <Header />
      {loader ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            zIndex: 10,
            display: "flex",
            top:0
          }}
        >
          <Rings
            height="100"
            width="100"
            color="#561d1f"
            secondaryColor="white"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{ alignItems: "center" }}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : null}
      <div className="prod-container">
        
        <div className="product-div">
          <div className="product-img">
            <img src={data.image} style={{ width: "100%" }} />
          </div>
          <div className="product-content">
            <label style={{ fontSize: 20 }}>{data.name}</label>
            <br />
            <label style={{ fontSize: 22, fontWeight: "bold" }}>
              {data.brand}
            </label>
            <br />
            <label style={{ fontSize: 20, fontWeight: "bold", color: "green" }}>
              Rs.{data.price}
            </label>
            <div>
              <div
                style={{
                  width: "75%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label>Size</label>
                <label onClick={() => setShowChart(!showChart)}>
                  {" "}
                  📏Size Chart
                </label>
              </div>
              <div style={{ display: "flex", gap: "5%" }}>
                <div
                  className="size-btn"
                  onClick={() =>
                    setSizecolor(true) &
                    setSizecolor1(false) &
                    setSizecolor2(false) &
                    setSizecolor3(false) &
                    setSizecolor4(false) &
                    setSize("XS")
                  }
                  style={{
                    cursor: "pointer",
                    width: 40,
                    height: 32,
                    border: "2px solid lightgrey",
                    borderRadius: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    color:size==="XS"?"#FFDAA9":"black",
                    background: size==="XS"
                      ? "#561D1F"
                      : null,
                    backgroundColor: size==="XS"?"linear-gradient(45deg,#BE9130, #e4c65b, #BE9130)":null
                  }}
                >
                  <span>XS</span>
                </div>
                <div
                  className="size-btn"
                  onClick={() =>
                    setSizecolor(false)  &
                    setSizecolor1(true)  &
                    setSizecolor2(false) &
                    setSizecolor3(false) &
                    setSizecolor4(false) &
                    setSize("S")
                  }
                  style={{
                    cursor: "pointer",
                    width: 40,
                    height: 32,
                    border: "2px solid lightgrey",
                    borderRadius: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    color:size==="S"?"#FFDAA9":"black",
                    background: size==="S"
                      ? "#561D1F"
                      : null,
                   
                  }}
                >
                  <span>S</span>
                </div>
                <div
                  className="size-btn"
                  onClick={() =>
                    setSizecolor(false) &
                    setSizecolor1(false) &
                    setSizecolor2(true) &
                    setSizecolor3(false) &
                    setSizecolor4(false) &
                    setSize("M")
                  }
                  style={{
                    cursor: "pointer",
                    width: 40,
                    height: 32,
                    border: "2px solid lightgrey",
                    borderRadius: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    background: size==="M"
                      ? "#561D1F"
                      : null,
                      color:size==="M"?"#FFDAA9":"black",
                  }}
                >
                  <span>M</span>
                </div>
                <div
                  className="size-btn"
                  onClick={() =>
                    setSizecolor(false) &
                    setSizecolor1(false) &
                    setSizecolor2(false) &
                    setSizecolor3(true) &
                    setSizecolor4(false) &
                    setSize("L")
                  }
                  style={{
                    cursor: "pointer",
                    width: 40,
                    height: 32,
                    border: "2px solid lightgrey",
                    borderRadius: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    background: size==="L"
                      ? "#561D1F"
                      : null,
                      color:size==="L"?"#FFDAA9":"black",
                  }}
                >
                  <span>L</span>
                </div>
                <div
                  className="size-btn"
                  onClick={() =>
                    setSizecolor(false) &
                    setSizecolor1(false) &
                    setSizecolor2(false) &
                    setSizecolor3(false) &
                    setSizecolor4(true) &
                    setSize("XL")
                  }
                  style={{
                    cursor: "pointer",
                    width: 40,
                    height: 32,
                    border: "2px solid lightgrey",
                    borderRadius: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    background: size==="XL"
                      ? "#561D1F"
                      : null,
                      color:size==="XL"?"#FFDAA9":"black",
                  }}
                >
                  <span>XL</span>
                </div>
              </div>
            </div>
            <br />
            <i class="fa fa-globe" aria-hidden="true"></i>

            <label style={{ fontSize: 13, marginLeft: "1%" }}>
              {" "}
              Worldwide Shipping
            </label>
            <br />
            <br />
            <div style={{ width: "100%", height:"15vh", display:"flex", justifyContent:"space-between", flexWrap:"wrap", }}>
              <button className="btn-cart"
                onClick={() => {
                  postCartData();
                }}
                style={{
                  width: "45%",
                  height: "5vh",
                  border: "none",
                  backgroundColor:'#561D1F',
                  color: "white",
                  fontSize: 14,
                  cursor:'pointer'
                }}
              >
                ADD TO CART
              </button>
              <button
              className="btn-cart"
                onClick={() =>nevi()}
                style={{
                  width: "45%",
                  height: "5vh",
                  border: "none",
                  backgroundColor:'#561D1F',
                  color: "white",
                  marginLeft: "5%",
                  fontSize: 14,
                  cursor:'pointer'
                }}
              >
                BUY NOW
              </button>
              <button
              className="btn-cart"
              onClick={()=>WishlistData()}
                style={{
                  width: "45%",
                  height: "5vh",
                  border: "none",
                  backgroundColor:'#561D1F',
                  color: "white",
                  fontSize: 14,
                  cursor:'pointer'
                }}
              >
                ADD TO WISHLIST
              </button>
            </div>
            <br />
            <div
              style={{ fontSize: 13, display: "flex", flexDirection: "column" }}
            >
              <label> 🎖 Assured Quality</label>
              <br />
              <label> 🛒 100% purchase protection</label>
              <br />
              <label> 🚚 Free Shipping</label>
              <br />
              <label> 🧵 Custom fitting</label>
              <br />
              <label> ⭐ Exclusive Collection</label>
              <br />
            </div> 
            <div
              style={{ fontSize: 16, display: "flex", flexDirection: "column", textAlign:"justify" }}
            >
              <label>{data.discription}</label>

              {/* <label>
                • You will receive a hot pink and red khaddi blouse with a red
                chinnon chiffon lehenga and a viscose organza dupatta
              </label>
              <br />
              <label>
                • The blouse is set with a stand collar and keyhole with an
                embellished juliet sleeve
              </label>
              <br />
              <label>• Embellished belt lehenga</label>
              <br />
              <label>• Dupatta comes with a khaddi border</label>
              <br />
              <label>• Side Zip </label>
              <br />
              <label>• This piece comes with padding</label>
              <br />
              <label>• Tailored Fit</label>
              <br />
              <label>
                Material: Chinnon Chiffon Viscose Organza Khaddi Shantoon
              </label>
              <br />
              <label>Length: Blouse - 15'' Skirt - 45''</label>
              <br />
              <label>Pack Contains: 1 Blouse 1 Lehenga 1 Dupatta</label>
              <br />
              <b>Shipping</b>
              <br />
              <label>
                This is a made to order product. We will need 2-4 weeks for
                production and dispatch
              </label>
              <br />
              <label>*Shipping in India is free</label>
              <br /> */}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", textAlign: "center", marginTop: "2%" }}>
        <label style={{ fontSize: 25 }}>SIMILAR</label>
        <div
          style={{
            width: "90%",
            marginLeft: "5%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            cursor:'pointer'
          }}
        >
          {lahangaData.filter((i)=>i.category===data.category&i.name!==data.name).map((i, n) =>
                <div
                  className="products"
                  onClick={() => {
                    navigate("/ProductView");
                    localStorage.setItem("productdata", JSON.stringify(i));
                    window.location.reload();
                  }}
                >
                  <div style={{ width: "100%", height: "88%" }}>
                    <img
                      src={i.image[0]}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <label>{i.name}</label>
                  <br />
                  <label>Rs.{i.price}</label>
                </div>
             )}
        </div>
      </div>
      <Footer />
      {showChart === true ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
          }}
        >
          <div style={{ width: "40%", height: "70vh", position: "relative" }}>
            <label
              onClick={() => setShowChart(!showChart)}
              style={{ position: "absolute", fontSize: 22, right: 10 }}
            >
              ✖
            </label>
            <img style={{ width: "100%", height: "100%" }} src={chart} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductView;
