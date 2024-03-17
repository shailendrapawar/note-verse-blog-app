import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './pages.css'

function Register() {
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const [age, setage] = useState(18)
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/register",
                {
                    name: uname,
                    email: email,
                    password: password,
                    age: age
                }
            )
            setError(res.data.msg)
            console.log(res);
            if(res.data.value==true){
                setTimeout(()=>{
                    navigate('/login')
                },500)
            }
        }catch(err){
            console.log(err.message)
        }
    }


    return (
        <div className='register-page'>
            <form onSubmit={handleRegister} className='register-form'>
                <div className='form-item-body'>
                    <p style={{ margin: "-20px", color: "red", fontSize: "1.1rem" }}>{error}</p>

                    <input required={true} type='text' value={uname} onChange={(e) => setUname(e.target.value)} placeholder='enter username'></input>
                    <input required={true} type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'></input>
                    <input required={true} type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'></input>
                    <input required={true} type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder=' confirm password'></input>

                    <div><button type='submit'>register</button><Link to='/login'>login</Link></div>
                </div>
            </form>
        </div>
    )
}

export default Register