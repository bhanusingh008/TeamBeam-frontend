import axios from 'axios';
import React, { useState } from 'react';
import base_url from '../apis/dataApi';
import { useAuthHeader } from 'react-auth-kit';
import toast from 'react-hot-toast';

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
        <div className='info-text'>
            <h1>Feel free to leave your mail and a message!, I'll mail back.</h1>
        </div>
        <div>
        <form className='contact-me'>
            <label style={{margin:'20px'}}>
                <div style={{color:'white'}}>Email</div>
                <input type='text' required style={{width:'250px'}} onChange={(e)=>{setData({...data, email: e.target.value})}}></input>
            </label>
            <label style={{margin:'20px'}}>
                <div style={{color:'white'}}>Message</div>
                <textarea style={{width:'250px', height:'150px'}} onChange={(e)=>{setData({...data, msg: e.target.value})}}></textarea>
            </label>

            <button onClick={handleSubmit} style={{color:'white'}}>Submit</button>
        </form>
       </div>
       <div className='footer'>
        <div>
            Thank You For Visiting.
        </div>
        <div>
            Find Me On:
            <a href='https://linkedin.com/in/bhanusingh0605' target='/'> LinkedIn </a>
            <a href='https://github.com/bhanusingh008' target='/'>Github</a>
        </div>
       </div>
    </div>
  )
}
