import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField'
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
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
        <div className='container'>
            <Form>
            <FormGroup>
                    <Label for="state">
                    Status
                    </Label>
                    <Input
                    id="state"
                    name="state"
                    type="select"
                    onChange={(e) =>{
                        setTask({...task, state: e.target.value})
                    }}
                    >
                    <option>
                        Select
                    </option>
                    <option>
                        To-Do
                    </option>
                    <option>
                        Doing
                    </option>
                    <option>
                        Done
                    </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Title">
                    Title
                    </Label>
                    <Input
                    id="title"
                    name="title"
                    placeholder="Enter the title"
                    type="text"
                    onChange={(e) =>{
                        setTask({...task, title: e.target.value})
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description">
                    Description
                    </Label>
                    <Input
                    id="description"
                    name="text"
                    type="textarea"
                    onChange={(e) =>{
                        setTask({...task, des: e.target.value})
                    }}
                    />
                </FormGroup>
                
                <Button onClick={handleForm}>
                    Submit
                </Button>

                <Button href='/'>
                    Back
                </Button>

                </Form>
        </div>
    )
}
export default AddTask;