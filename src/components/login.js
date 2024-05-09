import {React, useState}from 'react'
import axios from 'axios';
import './style.css'
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { useAuthHeader } from 'react-auth-kit';
import { Toaster, toast } from 'react-hot-toast';
import base_url from '../apis/dataApi';
import logo from '../assets/logo.png'

export const Login = () => {

    const signIn = useSignIn();
    const authHeader = useAuthHeader();
    const navigate = useNavigate();

    let s = authHeader();

    const[loginData, setData] = useState({
        email:"",
        password:""
    });

    if(s.length !== 0){
        return(
            <div style={{marginTop:'200px', color:'white'}}>
            <div>
                Already Logged In!!
            </div>
            <a href='/'>Main Screen</a>
            </div>
        )
    }


    const handleForm = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(`${base_url}/login`, loginData)
            let tokenRes = response.data.token;

            signIn({
                token : tokenRes,
                expiresIn: 120,
                tokenType: "Bearer",
                authState:{}
            });

            navigate("/")

        }catch(error){

            if(error.code == "ERR_NETWORK"){
                alert("Server is not responding");
                return;
            }

            if(error.code == "ERR_BAD_REQUEST"){
                alert("Email or Password does not match");
                return;
            }

            if(error.response != undefined && error.response.status == '401'){
                toast('Email or Password is invalid :|');
                return;
            }

            const notify = () =>{ toast('Sorry but Server is down :/'); }

            notify();
        }
    }

    

  return (
    <div className='login-page'>
        <div className='login-header'>Welcome To TeamBeam</div>

        <div>
            <div style={{color:'white'}}>
                Incase you're checking this app.<br></br>
                email = bhanu AND password = pass
            </div>
        </div>
        <hr></hr>
        <div className='login-logo-container'>
            <img className='login-logo' src={logo}></img>
        </div>
        <form className='login-form'>
            <label style={{marginTop:40}}>
                <div>Email Id</div>
                <div><input style={{color:'black'}} type="text" onChange={(e)=>{setData({...loginData, email : e.target.value})}}></input></div>
            </label>
            <label>
                <div>Password</div>
                <div><input style={{color:'black'}} type="password" onChange={(e)=>{setData({...loginData, password : e.target.value})}}></input></div>
            </label>

            <button className='login-button' onClick={handleForm}>Login</button>
        </form>
        <Toaster/>
    </div>
  )
}

export default Login;