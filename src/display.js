import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';
import Axios from './api';
import { NavLink, Table } from 'react-bootstrap';
import Homepage from './navbar';
import './display.css'
import Card from 'react-bootstrap/Card';




const Display = () => {

  const [tasks, setTask] = useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [itemsPerPage]=useState(5);
  const navigate = useNavigate();
  const[formstate,setForm]=useState(false)
  const [count, setCount]=useState(0)
  const [value,setValue]=useState('')

  useEffect(() => {
    fetchTask();
  }, [currentPage]);

  const fetchTask =async () => {
   await Axios
      .get(`/task/paginationview?page=${currentPage}`)
      .then((response) => {
        setTask(response.data.results);
        setCount(response.data.count);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  };

  const handleclosetask = async(listid,liststatus) => {
    let id = parseInt(listid)
    await Axios.put(`task/close/orm/?id=${id}`)
      .then((res) => {
        
        fetchTask()
        console.log('updated successfully')
      })
      .catch((error) => {
        console.error('error updating data')
      })
  
}

  const handledelettask = async (listid) => {
    console.log("del ");
    let id = parseInt(listid)
    alert('task deleted successfully')
    await Axios.delete(`task/delete/?id=${id}`)
      .then((res) => {
        
        fetchTask()
        console.log('updated successfully')

      })
      .catch((error) => {
        console.error('error updating data')
      })
  }


  const handleSelectfield = (task) => {
    setForm(true)
 // navigate('/update', { state: task });
  };

    const totalPages=Math.ceil(count / itemsPerPage)
    const pageNumbers=Array.from({length:totalPages},(_,index)=> index+1);

    const handlePageChange=(pageNumber)=>{
    console.log(pageNumber)
    setCurrentPage(pageNumber);
    }

  return (
    <>
        <Homepage />
        <div className={`backdrop ${formstate ? 'blurred-table':''} `}>  
        
        <form className='form1'>
          <h5>Hiii</h5>
          <  Table >
            <thead>
              <tr>
                <th>Task</th>
                <th>status</th>
                <th>Action</th>

                <th>contact</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => {
                return (
                  <tr key={task.id}>
                    <td>{task.task_descrption}</td>
                    <td>{task.status}</td>
                    <td className='tdclass'>

                    <NavLink
                     onClick={() => handleSelectfield(task)}
                     ><img 
                     title='Edit taskname' 
                     className='imageedit' 
                     src="edit.png">
                      </img>
                      </NavLink>
                      
                      <NavLink 
                      onClick={() => handledelettask(task.id)}
                      ><img 
                      title='Delete task' 
                      className='image' 
                      src="delete.png"
                      ></img>
                      </NavLink>
                        
                      {task.status=='pending' && 
                      <NavLink  
                        onClick={() => handleclosetask(task.id,task.status)}
                        >
                        <img 
                        className='imagetick' 
                        title='Close the task'
                        src="tick.jpeg"
                        ></img>
                      </NavLink> }

                    </td>
                  </tr>
                );
              })}

            </tbody>
          </Table>
        </form>
        <div className='page'>
              {pageNumbers.map((pageNumber)=>(
             
                <button 
                key={pageNumber}
                onClick={()=>handlePageChange(pageNumber)}
                className={pageNumber === currentPage? 'active' :''}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
      </div>

      {formstate &&
      <div>
        <form className='floating'>
          <label>Task Name to Update</label>
          <input type='text' 
          onChange={(e) => {
            setValue(e.target.value);
            }}/>
          <button onClick={() =>setForm(false)}>Update</button>
        </form>
      </div>}
    </>
  )

}

export default Display