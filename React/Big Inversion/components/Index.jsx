import React from 'react'

const Index = (props) => {
  const myStyle = {
    color:"red",
    border:"1px solid black",
    fontSize:"5rem",
    
  }
  return (
    <div>
      <h1> {props.name} </h1>
      <p> Age: {props.age}</p>
      <p> Hair Color: {props.hairColor}</p>
    </div>
    
  )
}

export default Index

