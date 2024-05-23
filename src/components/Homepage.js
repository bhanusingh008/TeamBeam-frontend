import React from "react";
import TaskListToDo from "./TaskListToDo";
import TaskListDoing from "./TaskListDoing";
import TaskListDone from "./TaskListDone";
import logo from '../assets/logo.png';
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Intro from "./Intro";
import Info from "./Info";

function Home(){

    const navigate = useNavigate();
    const SignOut = useSignOut();

    const logOut = () =>{
        try{
            SignOut();
            navigate('/login');
        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
            <div className="header">
                TeamBeam App
                <img src={logo} alt='logo_alt' style={{height:'40px', width:'50px', margin:'20'}}></img>
            </div>

            <div className="menu">
                <a href="add-task" className="add-task-btn">Add Task</a>
                <button onClick={logOut} className="sign-out-btn">SignOut</button>
            </div>
            <div><Intro/></div>
            
            <div className="home">
                <TaskListToDo state='To Do'/>
                <TaskListDoing state='Doing' />
                <TaskListDone state='Done' />
            </div>

            <Info/>
        </>
    );
};

export default Home;