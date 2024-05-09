import axios from 'axios';
import React, { useState } from 'react';
import base_url from '../apis/dataApi';
import { useAuthHeader } from 'react-auth-kit';
import toast from 'react-hot-toast';
import place_holder_img from '../assets/profile_pic.jpg'

export default function Info() {

    const useAuth = useAuthHeader();
    const [data, setData] = useState({
        email:"",
        msg:""
    });

    const Update_data = (jsn) =>{
        axios.post(`${base_url}/query`, jsn, {
            headers:{
                'Authorization': useAuth()
            }
        }).then(
            (response)=>{
                toast('Got it.');
            },
            (error)=>{
               if(error.response.status === 400){
                    toast('Please Fill in the blanks.'); 
               }else{
                    toast('something went wrong');
               }
            }
        );
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            Update_data(data);

        }catch(err){
            // console.log(err);
        }
    }


  return (
    <div className='info-page'>
        <div className='about-me'>
            <div className='footer-right'>
                <div className='me-img-div'>
                    <div className='me-img-container'>
                        <img className='me-img' src={place_holder_img}></img>
                    </div>
                </div>
                <div style={{alignItems:'center', alignContent:'center'}}>
                    Thank You For Visiting.
                </div>
                <div style={{alignItems:'center', alignContent:'center'}}>
                    Find Me On:
                    <a href='https://linkedin.com/in/bhanusingh0605' target='/'> LinkedIn </a>
                    <a href='https://github.com/bhanusingh008' target='/'>Github</a>
                </div>
            </div>
        </div>

        <div className='info-form'>
            <div className='info-text'>
                Feel free to leave your mail and a message!, I'll mail back.
            </div>
            <div>
                <form className='contact-me'>
                    <label style={{margin:'20px'}}>
                        <div style={{color:'white'}}>Email</div>
                        <input type='text' required style={{width:'250px', borderRadius:'10px', padding:'4px'}} onChange={(e)=>{setData({...data, email: e.target.value})}}></input>
                    </label>
                    <label>
                        <div style={{color:'white'}}>Message</div>
                        <textarea style={{width:'250px', borderRadius:'10px', padding:'4px'}} onChange={(e)=>{setData({...data, msg: e.target.value})}}></textarea>
                    </label>
                    <div>
                        <button onClick={handleSubmit} className='form-submit-btn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
