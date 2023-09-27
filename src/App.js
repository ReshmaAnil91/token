
import React from 'react';
import './App.css';
import CreateToDo from './todo';
import Display from './display';
import Update from './update';
//import Login from './login';
import ClosedDisplay from './closed';
import Homepage from './navbar';
import SignIn from './mui';
import { BrowserRouter as Router,Route ,Switch, Routes} from "react-router-dom";
// import SignIn from './mui';
import Background from './background';
import Header from './components/header';


class App extends React.Component {
  render() {
    return (
      <Header>
     {/* <Background> */}
       
        <Routes>
         <Route path="/" element={<SignIn/>} />
         <Route path="/home" element={<Homepage/>} />
        <Route path="/create" element={<CreateToDo/>} />
        <Route path="/display" element={<Display/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/close" element={<ClosedDisplay/>}/>
      </Routes>
 
      {/* </Background> */}
       </Header>
    );
  }
}
export default App;