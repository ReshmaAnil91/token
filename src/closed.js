import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import Axios from './api';
import { useLocation } from 'react-router-dom';
import Homepage from './navbar';

const ClosedDisplay=()=>{
  const location = useLocation();
  const selectStatus = location.state;
  
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetchTask();
        console.log("status",selectStatus)
      }, [selectStatus]);

      const fetchTask = () => {
        if(selectStatus=='pending'){
        Axios
          .get('/task/listall/?status=pending')
          .then((response) => {
            setTask(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error fetching tasks:', error);
          });
        }

        else if(selectStatus=='closed'){ Axios
          .get('/task/listall/?status=closed')
          .then((response) => {
            setTask(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error fetching tasks:', error);
          });}

          else if(selectStatus=='sort'){ Axios
            .get('/task/listall/?status=sort')
            .then((response) => {
              setTask(response.data);
              console.log(response.data);
            })
            .catch((error) => {
              console.error('Error fetching tasks:', error);
            });}
      }

     
    return(
        <>
        <div>
        <Homepage/>
       
        <form>
            <Table  striped bordered hover >
            <thead>
                <tr>
                  <th>task_descrption</th>
                  <th>status</th>
                 
                </tr>
                </thead>
                <tbody>
                {tasks.map(task => {return (
                    <tr key={task.id}>
                    <td>{task.task_descrption}</td>
                    <td>{task.status}</td>
                    <td>
                    </td>
                  </tr>
                )})}
                
              </tbody>
              
            </Table>
        </form>
        </div>
        </>
        )
    
}

export default ClosedDisplay