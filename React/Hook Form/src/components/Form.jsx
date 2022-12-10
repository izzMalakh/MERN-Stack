import React,{useState} from 'react'
import validator from 'validator'

const Form = () => {
    const [name,setName]= useState(""); // initial 
    const [lastname,setLastname]= useState(""); 
    const [email,setEmail]= useState(""); 
    const [password,setPassword]= useState(""); 
    // const [confirm,setConfirm]= useState("0"); 
    const [error,setError]= useState(""); // to contain error here in the state 
    const [error2,setError2]= useState(""); 
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')
    const [er, setEr] = useState('')
    const [bool,setBool]= useState(false); 

    const fun=(e)=>{
        //console.log(e); // will print SyntheticBaseEvent 
        //console.log(e.target); // the whole elemtent 
        console.log(e.target.value); 
        if(e.target.value.length<3 && e.target.value.length>0){
            // define new state to contain error message 
            setError("Name should be al least 3 characters");
        }

        else{
            setName(e.target.value);
            setError("");
        }
        
    }

    const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)')
            setEmail(e.target.value)
        } else if(e.target.value.length>0) {
            setEmail(e.target.value)
            setEmailError('Enter Valid Email!')
        }
        else{
            setEmail(e.target.value)
            setEmailError('')
        }
      }
      
    const fun3=(e)=>{
        //console.log(e); // will print SyntheticBaseEvent 
        //console.log(e.target); // the whole elemtent 
        console.log(e.target.value); 
        if(e.target.value.length<3 && e.target.value.length>0){
            // define new state to contain error message 
            setError2("Lastname should be al least 3 characters");
            
        }

        else{
            setLastname(e.target.value);
            setError2("");
        }
        
    }
    
    

    const fun2 =(ev)=>{
        ev.preventDefault()
        var firstname = document.getElementById('firstname');
        var email = document.getElementById('email');
        var lastname = document.getElementById('lastname');
        var passw = document.getElementById('passw');
        var confirm = document.getElementById('confirmPass');
        if(firstname.value.length>3 && validator.isEmail(email.value) && lastname.value.length>3 && passw.value.length>=8&& confirm.value.length>=8 && confirm.value.length == passw.value.length){

            setBool(true);

        }else{
            setEr("Fill all the form please!");

        }
    }


    const writePass = (e) => {
        var pass = e.target.value
        var confirm = document.getElementById('passw');
        
        if(pass != confirm.value ) {
            setPassError("Password and confirmPassoword Not Equal!")
        } else if(pass == confirm.value && pass.length>=8 && confirm.value.length>=8){
            
            setPassError("Looks Good !")
        } else{
            setPassError("hh")
        }
        
      }
    
      const funpass=(e)=>{
        const passs = e.target.value
        setPassword(passs)
        if(passs.length >0 && passs.length <8) {
            setPassError("Password should be at least 8 char")
        }
        else{
            setPassError("")
        }
      }

     
    
  
return (
    <div>
    <form onSubmit={fun2}>
        <p>First Name:<input type="text" id="firstname" onChange={fun} /></p>
        <p> {error} </p>

        <p> Last Name: <input type="text" id="lastname" onChange={fun3} /></p>
        <p>{error2}</p>
        
        <p>Email:<input type="text" id="email" onChange={(e) => validateEmail(e)}></input></p>
        <p> {emailError} </p>

        <p> Password: <input type="password" id="passw" onChange={(e) => funpass(e)} /></p>
        <p> {passError} </p>

        <p> Cofirm Password: <input type="password" id='confirmPass' onChange={(e) => writePass(e)}/></p>

        <input type="submit" value="send"/>
        <p>Your Form Data </p>
        <p id="er">{er}</p>
        <hr>
        </hr>

        <p> Name: {name}</p>
        <p> Last Name: {lastname}</p>

        <p> Eamil: {email}</p>
        <p> PassWord: {password}</p>

        <p> {bool?<h1>Thank you baby</h1>:<h2> please  fill the form and submit </h2>} </p>
    </form>
    </div>
)
}

export default Form
