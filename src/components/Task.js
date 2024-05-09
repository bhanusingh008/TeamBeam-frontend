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
import { MenuItem } from '@mui/material';
import { useAuthHeader } from 'react-auth-kit';
import { Toaster, toast } from 'react-hot-toast';


function Task({id, title, description, state}){

    const useAuth = useAuthHeader();

    const reloadPage = () => {
        window.location.reload()
    };

    const DeleteTask=()=>{

        axios.delete(`${base_url}/delete/${id}`, {
            headers:{
                'Authorization': useAuth()
            }
        }).then(
            (response)=>{
                toast('Task deleted.')
                setInterval(()=>{reloadPage()}, 700);
            }
        );
    };

    const Update_task=(data)=>{
        axios.post(`${base_url}/task`, data, {
            headers:{
                'Authorization': useAuth()
            }
        }).then(
            (response)=>{

                toast('Task Updated.')
                setInterval(()=>{reloadPage()}, 700);
            }, 
            (error)=>{
                console.log(error);
            }
        );
    };

    const handleForm=(e)=>{
        e.preventDefault();
        Update_task(task);
    };

    const [task, setTask] = useState({});
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setTask({...task, title: title, des : description, id : id});
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return(
        
<div class="task-container" style={{marginTop:'10px', padding:'10px'}} className='task'>
  
        <h5 class="mb-2 text-2xl font-bold tracking-tight" style={{wordWrap:'break-word'}}>{title}</h5>
        {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p> */}
        <p style={{marginBottom:'10px', wordWrap:'break-word'}}>{description}</p>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Please Enter the details you desire to update.</DialogContentText>
                            <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Task title"
                            type="name"
                            fullWidth
                            variant="standard"
                            defaultValue={task.title}
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
                            defaultValue={task.des}
                            onChange={(e)=>{
                                
                                setTask({...task, des: e.target.value})
                            }}
                            />

                            <TextField
                            autoFocus
                            margin="dense"
                            id=""
                            label="To-Do/Doing/Done"
                            select
                            fullWidth
                            variant="standard"
                            onChange={(e)=>{
                                
                                setTask({...task, state: e.target.value})
                            }}
                            >
                    <MenuItem value="To-Do">To-Do</MenuItem>
                    <MenuItem value="Doing">Doing</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                    </TextField>
                    </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleForm}>Update</Button>
                </DialogActions>
            </Dialog>
        <div className='task-btns'>
        <button className='login-button' variant="outlined" onClick={handleClickOpen} >Update</button>
        <button className='login-button' variant='outlined' onClick={DeleteTask}>Delete</button>
        </div>
        <Toaster/>
</div>

    );
};

export default Task;