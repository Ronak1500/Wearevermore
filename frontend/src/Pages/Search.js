import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { baseUrl } from "./baseUrl";

function Jumpsuit() {
  useEffect(() => {
    getLahangadata();
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [lahangaData, setLahangaData] = useState([]);
  const [search, setSearch] = useState(localStorage.getItem("searchInput"));
  const getLahangadata = () => {
    axios.get(baseUrl + "product").then((res) => {
      setLahangaData(
        res.data.data.filter(
          (i) =>
            i.name.includes(search) ||
            i.category.includes(search) ||
            i.brand.includes(search) ||
            i.color.includes(search)
        )
      );
    });
  };

  return (
    <div>
      <Header />
      <div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "2%" }}>
          <label style={{ fontSize: 25 }}>
            {lahangaData.length} RESULTS FOR "{search.toUpperCase()}"
          </label>
          <br></br>
          <div style={{width:"50%", height:40, backgroundColor:"#561D1F", marginLeft:"25%", display:"flex"}}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              height: "40px",
              width: "90%",
              transition: "0.3s",
              outline: "none",
            }}
            placeholder="Search"
          />
          <button style={{width:"10%", height:40, border:"none", backgroundColor:"transparent"}}>
          <i
            onClick={() => getLahangadata()}
            class="fa fa-search web-icon-search"
            style={{ color: "#FFDAA9" }}
            aria-hidden="true"
          ></i>
          </button>
          </div>
          <br></br>
          <div
            style={{
              width: "90%",
              marginLeft: "5%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {lahangaData.map((i) => (
              <div
                style={{ cursor: "pointer" }}
                className="products"
                onClick={() => {
                  navigate("/ProductView");
                  localStorage.setItem("productdata", JSON.stringify(i));
                }}
              >
                <div style={{ width: "100%", height: "88%" }}>
                  <img
                    src={i.image[0]}
                    style={{ width: "100%", height: "400px" }}
                  />
                </div>
                <label style={{ cursor: "pointer" }}>{i.name}</label>
                <br />
                <label style={{ cursor: "pointer" }}>Rs.{i.price}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Jumpsuit;
