import React,{useState} from 'react' // we need hook in functional component 

const Mycount = (props) => {
    //cnt and setCnt k2nha getter and setter :D 
    const [cnt,setCnt] = useState(props.age) // initial value is props.age // cnt in the state variable that will change 
    //define the funtion before the return
    const fun=() => {
        setCnt(cnt+2);
    }
  return (
    <div>
      <h1> {cnt} </h1>
      <button onClick={fun}> Increment 2 </button>
    </div>
  )
}

export default Mycount
