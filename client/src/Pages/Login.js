import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import react, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../Styles/login.css"


const Login =()=>{
    const [inpval,setInpval] = useState({email:"",password:""})

    const  [data, setData] = useState([])
    console.log(inpval);
    const getData = (e)=>{
       const {value, name} = e.target;
      
        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
     
    }
    const addData = (e)=>{
        e.preventDefault();

       const {name, email, date, password} = inpval;
       if(email === ""){
        alert("email field is required")
       }else if(!email.includes("@")){
        alert("plz enter valid email address")
       }else if(password===""){
        alert("password field is required")
       }else if(password.length<5){
        alert("password length greater five")
       }
       else{
        console.log("data added succesfully");
          localStorage.setItem("userdata", JSON.stringify([...data,inpval]) );
       }
      }
    return (<div className='box-container'>
                <div className='container-box'>
        <h2 className='sign-in'>Sign in </h2>
        
    <Form>
     <Form.Group className="mb-3"  controlId="formBasicEmail">
    <Form.Control type="email"  name ='email' onChange ={getData} placeholder="Your email" />
    </Form.Group>
    <Form.Group className="mb-3"  controlId="formBasicPassword">
    <Form.Control type="password" name ='password' onChange ={getData} placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3 col-lg-6 remember-field" controlId="formBasicCheckbox">
    <Form.Check  type="checkbox" label="Rmember me" />
    </Form.Group>
    <p>Doesn't have account <span><NavLink to ={"/signup"}>SignUp</NavLink></span></p>
    <div> <Button variant="primary" className='mb-3 col-lg-12' onClick={addData} type="submit">
    Sign in
  </Button></div>

 
</Form>
        

    </div>
    </div>

    )
}
export default Login