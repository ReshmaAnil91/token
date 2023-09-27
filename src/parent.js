import React from "react";
import Child from "./child";

function Parent(){
  const data={
    name:"abcdefg",
    age:20
  }
    return(
<>
<div>
    <Child data={data}/>
</div>

</>
    );
}
export default Parent
