import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField'
import { Container} from "reactstrap";
import axios from "axios";
import base_url from "../apis/dataApi";
import Button from '@mui/material/Button';

const AddTask=()=>{

    useEffect(()=>{
        document.title = "Add Task"
    }, []);

    const [task, setTask] = useState({});
    //form handler function

    const handleForm=(e)=>{
        console.log(task);
        post_course(task);
        e.preventDefault();
    }

    // function to post data to server

    const post_course=(data)=>{
        axios.post(`${base_url}/task`, data).then(
            (response)=>{
                console.log(response);
                alert('Task Added');
            }, 
            (error)=>{
                alert("Not appropriate values.");
                console.log(error);
            }
        );
    };
    
    return(
        <div>
            <Container style={{display:"flex",marginTop:50, padding:20, marginLeft:50, flexDirection:'column', width:'92%'}}>
            <form onSubmit={handleForm}>

            <TextField fullWidth id="State" label="To-Do/Doing/Done" variant="outlined" margin='dense' onChange={(e)=>{
                        
                        setTask({...task, state: e.target.value})
                    }}    
            />

            <TextField fullWidth id="Title" label="Task Title" variant="outlined" margin='dense' onChange={(e)=>{
                        
                        setTask({...task, title: e.target.value})
                    }}    
            />

            <TextField fullWidth id="desc" label="Description" variant="outlined" margin='dense' onChange={(e)=>{
                        
                        setTask({...task, des: e.target.value})
                    }}
            />
            <Button variant='contained' type='submit' color='success'>Add Task</Button>
            
            <Button variant='contained' href='/' style={{marginLeft:'20px'}}>Back</Button>
            
         </form>
            </Container>
        </div>
    )
}
export default AddTask;