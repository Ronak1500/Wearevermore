import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import login from './login.css'

function CreateAccount() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  const navigate = useNavigate()
  const [postData, setPostData] = useState({});
  const postUserData = () => {
    axios.post(baseUrl+"userlist", postData);
  };
  return (
    <div>
      <Header />
      <div className="login-div">
        <br />
        
        <label style={{ fontSize: 40 }}>Create Account</label>
        <div className="login-inp">
          

          <label>First Name</label>
          <br />
          <input
            onChange={(e) =>
              setPostData({ ...postData, firstName: e.target.value })
            }
            style={{
              width: "100%",
              height: "6.5vh",
              paddingLeft: "2%",
              borderRadius: 2,
            }}
          />
          <br />
          <br />
          <label>Last Name</label>
          <br />
          <input
            onChange={(e) =>
              setPostData({ ...postData, lastName: e.target.value })
            }
            style={{
              width: "100%",
              height: "6.5vh",
              paddingLeft: "2%",
              borderRadius: 2,
            }}
          />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input
            onChange={(e) =>
              setPostData({ ...postData, email: e.target.value })
            }
            style={{
              width: "100%",
              height: "6.5vh",
              paddingLeft: "2%",
              borderRadius: 2,
            }}
          />
          <br />
          <br />
          <label>Mobile Number</label>
          <br />
          <input
            onChange={(e) =>
              setPostData({ ...postData, phoneNumber: e.target.value })
            }
            style={{
              width: "100%",
              height: "6.5vh",
              paddingLeft: "2%",
              borderRadius: 2,
            }}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            onChange={(e) =>
              setPostData({ ...postData, password: e.target.value })
            }
            style={{
              width: "100%",
              height: "6.5vh",
              paddingLeft: "2%",
              borderRadius: 2,
            }}
          />
        </div>
        <br />

        <button className="login-btn"
          onClick={() =>{ postUserData(); navigate("/Login")}}
         
        >
          CREATE
        </button>
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default CreateAccount;
