import React,{ useState } from 'react'
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import {useNavigate } from 'react-router-dom';

function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [usernameError,setUsernameerror]=useState("")
  const [login,setLogin]=useState(false)
  const history= useNavigate()

  const handleLogin=()=>{

    if(username==='' || password===''){
    
      setUsernameerror('Both fields are required !!');
    }
    else{
    axios.post('http://127.0.0.1:8000/todolist/token/login/',{username,password})
    .then((res)=>
     {
        localStorage.setItem("accessToken",res.data.access)
        localStorage.setItem("refreshToken",res.data.refresh)
        console.log("access: ",res.data.access)
        console.log("refresh: ",res.data.refresh)
        history('/display')
     }
    )
    .catch((err)=>setLogin(true))
   // alert('invalid credentials')
    console.error("error")
  }
  }
  return (
    <div className='mt-5'>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
        <div className="border border-2 border-primary"></div>
          <Card className="shadow px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase ">Login</h2>
                <div className="mb-3">
                  <Form>
                    <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Username
                      </Form.Label>
                      <Form.Control onFocus={()=>setUsernameerror('')} type="text" placeholder="Enter username" autoComplete='off' value={username}
                        onChange={(e) => {
                        setUsername(e.target.value)}}/>
                    </Form.Group>
                  
                    </div>
                    <div>
                    <Form.Group className="mb-3"controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control onFocus={()=>setUsernameerror('')} type="password" placeholder="Password" autoComplete='off' value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)}}/>
                    </Form.Group>
                    </div>
                    <div>  { usernameError && <div style={{color:'red'}}>{usernameError}</div>}</div>
                   
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    >
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="button" onClick={handleLogin}>
                        Login
                      </Button>
                      
                    </div>
                  </Form>
                 {login &&  <p style={{color:"red"}}>login failed</p>}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Login