import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from 'react-router-dom'; 
import Axios from './api';

import Header from './components/header';
import Homepage from './components/navbar';

const CreateToDo=()=>{
const navigate = useNavigate();
const [taskError, setTaskerror] = useState('');
const [statusError, setStatuserror] = useState('');
const[errorTask,setError]=useState('');

 const [formData, setFormData] = useState({
    task_descrption:'',
    status:''
  });

  const handleEvent=(e)=>{
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));

      
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.task_descrption ===''){
      setTaskerror('The field cannot be empty')
    }
    else if(!/^[A-Za-z0-9\s]+$/.test(formData.task_descrption)){
      setTaskerror('Only alphabets,numbers and whitespaces are allowed!!');
    }
    else if(formData.status===''){
      setStatuserror('The field cannot be empty!!')
    }
    else if(formData.status !=='pending' && formData.status!=='closed'){

     setStatuserror('Status should be either pending or closed !!')
    }
   
   else{
    //checkTokenExpiration()
    try {
      const response = await Axios.post("task/", formData);
      console.log('Response:', response.data)
      setFormData({
        task_descrption: '',
        status: '',
        
      });
      navigate('/display');
    } catch (error) {
    
      
      console.log('Error:', error.response.data.error);
      setError(error.response.data.error) 
    } 
}}
 return(
    <>
     <Homepage/>
     <div className='createmain'>
    <div style={{marginLeft:'400px',marginRight:'400px',marginTop:'100px'}}>
    
        <form class="row g-3" className='createform' onSubmit={handleSubmit} onFocus={()=>setError('')}>
         <label>TaskName:</label><br/>

         <input onFocus={()=>setTaskerror('')} class="form-control" type='text' onChange={handleEvent} value={formData.task_descrption} name='task_descrption' />
         <div>  { taskError && <div style={{color:'red'}}>{taskError}</div>}</div>
         <label>Status:</label><br/>
         <input onFocus={()=>setStatuserror('')}class="form-control" type='text' onChange={handleEvent} value={formData.status} name='status' />
         <div>  { statusError && <div style={{color:'red'}}>{statusError}</div>}</div>
         <div>{errorTask && <div style={{color:'red'}}>{errorTask}!!</div>}</div>
         <button type='submit'>Create</button>
         
        </form>
    </div>
    </div>
    </>
 )
};
export default CreateToDo