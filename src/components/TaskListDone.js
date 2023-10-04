import '../App.css';
import {React, useState, useEffect} from 'react';
import './style.css';
import Task from './Task';
import axios from "axios";
import base_url from "../apis/dataApi";
import { useAuthHeader } from 'react-auth-kit';


function TaskListDone({state}){

    const authHeader = useAuthHeader();

    const GetAllTodo= async ()=>{
        try{
            await axios.get(`${base_url}/done`, {
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

            // alert("Error Fetching data from Server");

            // do nothing
        }
    };


    const [task, settask] = useState([]);

    useEffect(()=>{
        GetAllTodo();
    }, []);

    // console.log("here");

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

export default TaskListDone;