import React from "react";
import './display.css'

function Background({children}){
return(
<>
<div className="background">
{children}
</div>
</>
);
}
export default Background