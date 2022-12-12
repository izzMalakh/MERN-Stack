import React,{useState} from 'react'

const Tab = () => {

    const[tab,setTab]=useState("");
    const arr =["Tab1", "Tab2" ,'Tab3']
    function sayHello(item){
        setTab("This is the "+item);
    }

    
  return (
    <div>
        {arr.map((item) => 
        
            <button style={{width:"100px" , height:"60px",margin:"10px"}} onClick={() => sayHello(item)}> {item} </button>
        
      )}

      <h2>{tab}</h2>

        

    </div>
  )
}

export default Tab
