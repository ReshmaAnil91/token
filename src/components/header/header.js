import React, { children } from "react"
import './header.css';
import Child from "../../child";

function Header({children}){
    return(
        <>
        <div>
        <h4 className="heading">Todolist</h4>
        </div>
        <div>{children}</div>
        </>
    )
}
export default Header