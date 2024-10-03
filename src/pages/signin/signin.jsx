import React, { useState } from 'react'
import "./signin.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const login = async()=>{
        setIsLoading(true)
        try {
            const response = await axios.post('http://localhost:5000/auth/login',{
                email,
                password
            })
            console.log({response});
            if(response.status === 200){
                navigate("/")
            }
        } catch (error) {
            console.log({error});
            alert(error?.response?.data.msg)
        }
        setIsLoading(false)
    }
  return (
    <div className="container1">
        <div className="images">
            <img className="signin image" src="/images/signin_image.png" alt="signin img" />
        </div>
        <div className="form">
            <div className="top">
                <div className="logo coffe">
                    <img src="/images/logo_coffe.svg" alt="logo coffe img" />
                    <span>Coffe Shop</span>
                </div>
                <button className="btn-signup">Sign Up</button>
            </div>
            <h2>Login</h2>
            <form action=""/>
                <div className="form-input">
                    <label For="email">Email Address:</label>
                    <input onChange={e =>{
                        setEmail(e.target.value)
                    }}type="text" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-input">
                    <label For="password">Password:</label>
                    <input onChange={e =>{
                        setPassword(e.target.value)
                    }}type="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="forgot">Forgot Password?</div>
                <div onClick={login}className="btn-login">{isLoading ? "loading..." : "login"}</div>
                <div id="btn-google"className="btn-google">
                    <img src="/images/google_logo.svg" alt="google logo img" />
                    Login With Google
                </div>
        </div>
    </div>

             
  )
}

export default Signin
