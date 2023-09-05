import '../App.css';
import {React, useState, useEffect} from 'react';
import './style.css';
import Task from './Task';
import axios from "axios";
import base_url from "../apis/dataApi";

function TaskListDoing({state}){

    var count = 0;

    const GetAllTodo=()=>{
        axios.get(`${base_url}/doing`).then(
            (response)=>{
                console.log(response.data);
                settask(response.data);
            }
        );
    };

    const [task, settask] = useState([]);

    useEffect(()=>{
        GetAllTodo();
    }, []);

    return(
        <div className='task-container'>
            <h1 className='status-tag'>{state}</h1>

        <div className='task-list'>
            {  
                task.length > 0 ? task.map((item) => <Task id={item.id} title = {item.title} description={item.des} />) : "No Tasks"
            }
        </div>
        </div>
    );
};

export default TaskListDoing;