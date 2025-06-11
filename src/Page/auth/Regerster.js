import React from 'react'
import { Link } from 'react-router-dom'
import RegisterHook from './../../Hooks/auth/RegisterHook';
import { ToastContainer } from 'react-toastify';
 
const Regerster = () => {
  const[name , email , password , confirmation_password,onchangename,onchangeemail,onchangepassword,onchangeconfirmation_password,onclicks]= RegisterHook()
  
  return (
    <div>
    <ToastContainer/>

       <form style={{minHeight:"670px", maxWidth:'400px'}} className='m-auto mt-5'> 
  <div className="mb-3">
    <h3 for="exampleInputEmail1" className="form-label mb-4">Register a new account</h3>
    <input value={name} onChange={onchangename} placeholder='User Name' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div className="mb-3">
     <input  value={email} onChange={onchangeemail} placeholder='Email address' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div className="mb-3">
     <input  value={password} onChange={onchangepassword} placeholder='Password' type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
     <input  value={confirmation_password} onChange={onchangeconfirmation_password} placeholder='confirmation_password' type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 ">
    <input className='mx-2   form-check-input'  style={{border: "2px solid black"}}type="checkbox"   id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="d-grid gap-2">
  <button onClick={onclicks} className="btn     " style={{backgroundColor:"black", color:"white"}} type="button">Submit</button>
</div>
<label className="form-check-label mt-3" for="exampleCheck1">
    <span>You already have an account? </span> 
    <Link style={{textDecoration:"none"}} to="/login">
    <span style={{color:"#C70039"}}>click here</span>
    </Link>
</label>

</form>   
    </div>
  )
}

export default Regerster
