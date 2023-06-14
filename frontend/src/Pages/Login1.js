
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import login from './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from './baseUrl'

function Login() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [underline,setUnderline]=useState(false)
  const [validator, setValidator] = useState(false)
  const login=()=>{
    if(email!==""&password!==""){
    const item={
      email:email,
      password:password
    }

    
    axios.post(baseUrl+"userlist/login",item).then((res)=>{
      
      if(res.data.msg==="ok"){
        const user=res.data.user
        localStorage.setItem("user","yes")
        localStorage.setItem("userEmail",user.email)
        localStorage.setItem("fname",user.firstName)
        localStorage.setItem("lname",user.lastName)
        localStorage.setItem("Uid",user._id)

        navigate("/Checkout")
      }else{
        alert(res.data.msg)
      }
    }
    );
  }else {
    setValidator(true)
  }
  }
  const navigate = useNavigate()
  return (
    <div>
        <Header/>
        <div className='login-div'>
            <br/>
            <label style={{fontSize:40, color:"#561D1F"}}>Login</label>
            <div className='login-inp'>
                <label>Email</label><br/>
                <input onChange={(e)=>setEmail(e.target.value)} style={{width:"100%",border:validator===true&email===""? "1px solid red":"1px solid grey", height:"6.5vh", paddingLeft:"2%", borderRadius:2}}/><br/>
                <br/>
                <label>Password</label><br/>
                <input onChange={(e)=>setPassword(e.target.value)} style={{width:"100%",border: validator===true&password===""? "1px solid red":"1px solid grey", height:"6.5vh", paddingLeft:"2%", borderRadius:2}}/>
            </div>
            <br/>
            <label style={{color:"grey", cursor:"pointer"}}>Forgot your password ? </label>
            <br/>
            {/* <button className="login-btn">
              <img
                style={{ height: "20px", width: "20px" }}
                src="https://img.icons8.com/color/48/null/google-logo.png"
              />
              &nbsp;Sign in with Google
            </button> */}            
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="lined"></div>&nbsp;&nbsp;&nbsp;&nbsp;
              {/* <label style={{ color: "grey" }}>or</label> */}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="lined"></div>
            </div>
            <button onClick={()=>login()} className="login-btn" >SIGN IN</button>
            <br/>
            <div>
            <label onMouseLeave={()=>setUnderline(false)} onMouseOver={()=>setUnderline(true)} onClick={()=>navigate("/CreateAccount")} style={{cursor:"pointer", color:"#232222", fontWeight:"600"}}>Create account</label>
            <div style={{width:underline?108:0,height:"2px",transition:"0.5s", backgroundColor:"#561D1F",alignSelf:"flex-start" }}></div>
            </div>
           
        </div>
        <Footer/>
    </div>
  )
}

export default Login