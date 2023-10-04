import React from "react";
import TaskListToDo from "./TaskListToDo";
import TaskListDoing from "./TaskListDoing";
import TaskListDone from "./TaskListDone";
import logo from './logo.png';
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
// import { useAuthHeader } from "react-auth-kit";

function Home(){

    const navigate = useNavigate();
    const SignOut = useSignOut();

    const logOut = () =>{

        SignOut();
        navigate('/login');
    }

    return(
        <>

        <div className="header">
            KANBAN APP
            <img src={logo} style={{height:'40px', width:'50px', margin:'20'}}></img>
        </div>

        <div className="add-btn">

        <a href="add-task" class="m-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
        bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add Task
        </a>

        </div>

        <button onClick={() => {logOut()}} style={{color:'white'}}>SignOut</button>

        <div className="home">
            <TaskListToDo state='To Do'/>
            <TaskListDoing state='Doing' />
            <TaskListDone state='Done' />
        </div>
        </>
    );
};

export default Home;