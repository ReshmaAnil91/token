import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//import {UserProvider} from './context';
import Child from './child';
import Displayy from './display2';
import PersonInfo from './sample';
import Parent from './child';
import Display from './display';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<UserProvider>
    <BrowserRouter>
    <Display/>
    </BrowserRouter>
   // </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
