import React, { useState } from 'react'

const Todo = () => {
    const [name,setName]= useState(""); // initial 
    const[todo,setTodo]=useState([]);
    
    const itemtodo ={
      text :name,
      status:false,
    }
    const fun1=(e)=>{
        setName(e.target.value);
        
    }
    const handleform=(e)=>{
        e.preventDefault()
        if(name.length==0){
          return;
        }
        setTodo([...todo, itemtodo]);
        setName("")
      }
    
      const deleteTodo = (i)=>{
        setTodo([
          ...todo.slice(0, i),
          ...todo.slice(i + 1)
      ]);
      }

      const handleToggleTodo = (idx) =>{
        const updateTodo = todo.map((name,i)=>{
          if(idx==i){
            name.status=!name.status;
          }

          return name;
        })
        setTodo(updateTodo);
      }
    
  return (
    <div>
        <form onSubmit={handleform}>
        <input type="text" onChange={fun1} value={name}/>
        
        <p><input type="submit" value="add" /></p>
        </form>
        
        {todo.map((item ,i) => {
          return(
            <div key={i} style={{display:"flex" ,margin:"0 auto",width:"500px",backgroundColor:"pink"}}>
            <input onChange={()=>{
              handleToggleTodo(i)
            }

            } checked={item.status} type="checkbox"/>
            <p style={{textDecoration: item.status? 'line-through':'none'}}> {item.text} </p>
            <button style={{marginLeft:"15px"}}onClick={()=>{
              deleteTodo(i)
            }}>Delete</button>
            </div>
            
          )
        })}
    </div>
  )
}

export default Todo
