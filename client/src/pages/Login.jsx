import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {


  const [error, setError] = useState("Welcome back")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate=useNavigate();


  const handleLogin = async (e) => {

    
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password
      })
      console.log(res)
      setError(res.data.msg)
        if(res.data.value==true){
          localStorage.setItem("name",res.data.userName)
          localStorage.setItem("token",res.data.token)
          localStorage.setItem("email",res.data.email)
          console.log("token saved");
          setTimeout(()=>{
            navigate('/')
          },1000)
        }else{
          console.log("token not saved");
        }
    } catch (err) {
      console.log(err.message);
    }

  }

  return (
    <div>
      <div className='login-page'>
        <form className='login-form' onSubmit={handleLogin}>
          <div className='login-item-body'>
            <p style={{ margin: "-40px", color: "red", fontSize: "1.1rem", fontFamily: "cursive" }}>{error}</p>
            <input type='email' required={true} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'></input>
            <input type='password' required={true} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'></input>
            <div><button type='submit'>login</button><Link to='/register'>register</Link></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login