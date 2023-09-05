import '../App.css';
import {React, useState} from 'react';
import './style.css';
import base_url from "../apis/dataApi";
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Task({id, title, description, state}){

    const reloadPage = () => {
        window.location.reload()
    };

    const DeleteTask=()=>{

        axios.delete(`${base_url}/delete/${id}`).then(
            (response)=>{
                console.log(response.data);
                reloadPage();
            }
        );
    };

    const update_task=(data)=>{

        axios.post(`${base_url}/task`, data).then(
            (response)=>{
                console.log(response);
                alert('Task Updated');
                reloadPage();
            }, 
            (error)=>{
                console.log(error);
            }
        );
    };

    const handleForm=(e)=>{
        console.log(task);
        update_task(task);
        e.preventDefault();
    };

    const [task, setTask] = useState({});

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
    setOpen(false);
    };

    return(
        
<div class="max-w-sm p-6 bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3">
  
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p> */}
        <p>{description}</p>


        <Button variant="outlined" onClick={handleClickOpen} class="m-2 font-medium text-center text-white 
        bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-100">
                    Update
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Update</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                    Please Enter the details you desire to update.
                    </DialogContentText>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="titel"
                    label="Task title"
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{
                        
                        setTask({...task, title: e.target.value, id:id})
                    }}    
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id=""
                    label="Description"
                    type="course_desc"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{
                        
                        setTask({...task, des: e.target.value})
                    }}
                    />

                    <TextField
                    autoFocus
                    margin="dense"
                    id=""
                    label="To-Do/Doing/Done"
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{
                        
                        setTask({...task, state: e.target.value})
                    }}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleForm}>Update</Button>
                    </DialogActions>
                    </Dialog>


        <Button class="m-2 font-medium text-center text-white 
        bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-100" onClick={DeleteTask}>
            Delete
        </Button>
</div>

    );
};

export default Task;