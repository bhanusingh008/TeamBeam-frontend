import '../App.css';
import {React, useState, useEffect} from 'react';
import './style.css';
import Task from './Task';
import axios from "axios";
import { useAuthHeader } from 'react-auth-kit';
import base_url from "../apis/dataApi";

function TaskListDoing({state}){

    const authHeader = useAuthHeader();

    // console.log(authHeader());

    const GetAllTodo= async ()=>{
        try{
            await axios.get(`${base_url}/doing`, {
                headers:{
                    'Authorization': authHeader()
                }
            }).then(
                (response)=>{
                    // console.log(response.data);
                    settask(response.data);
                }
            )
        }catch(error){

            alert("Error Fetching data from Server");
        }
    };

    const [task, settask] = useState([]);

    useEffect(()=>{
        GetAllTodo();
    }, []);

    return(
        <div className='task-container'>
            <h1 className='status-tag'>{state}</h1>

            <hr></hr>

        <div className='task-list'>
            {  
                task.length > 0 ? task.map((item) => <Task id={item.id} title = {item.title} description={item.des} />) : "No Tasks"
            }
        </div>
        </div>
    );
};

export default TaskListDoing;