import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import Homepage from './components/navbar';
import Axios from './api';


    const Update=()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const selectedtask = location.state;
    const [taskName,settaskName]=useState('')

     const handlesubmit=async (e) =>{
       const datatoupdate={
        id:selectedtask.id,
        taskName:taskName,
        version:selectedtask.version
       }
      console.log(datatoupdate)
        e.preventDefault();
       await Axios
          .put(`task/update/`,datatoupdate)
          .then((response) => {
            console.log(response.data);
          alert('task updated succesfully')
          navigate('/display')
          
          })
          .catch((error) => {
            console.log("cant update");
          });
     }
    return(
        <>
        <div class="mb-3">
        <Homepage/>
          <h4 style={{marginLeft:"100px",marginTop:"50px"}}>Todolist</h4>
        <form class="row g-3" onSubmit={handlesubmit} style={{height:'200px',width:"1000px",marginLeft:"100px",marginTop:"30px"}}>
         <label>taskid</label>
         <input  class="form-control" type='number'  name='id' value={selectedtask.id} readOnly='True'></input>
         <label>enter new value to update</label>
         <input  class="form-control" type='text' value={taskName} name='taskName' onChange={(e)=>settaskName(e.target.value)}></input>
         <label> version</label>
         <input  class="form-control" type='number' value={selectedtask.version} name='version' readOnly='True' ></input>
         <button type='submit' >update</button>
         </form>
        </div>
        </>
        )
    
}

export default Update