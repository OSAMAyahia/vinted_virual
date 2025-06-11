import React from 'react'
import { Link } from 'react-router-dom'
import LoginHook from './../../Hooks/auth/LoginHooks';
import { ToastContainer } from 'react-toastify';

const Loginpage = () => {

  const [  email,  password, onChangeEmail, onChangePassword, onClicks] =LoginHook()
 
  return (
 <form style={{minHeight:"670px", maxWidth:'400px'}} className='m-auto mt-5'> 
  <div className="mb-3">
  <ToastContainer/>

    <h3 for="exampleInputEmail1" className="form-label mb-4">Log in</h3>
    <input value={email} onChange={onChangeEmail} placeholder='Email address' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div className="mb-3">
     <input value={password} onChange={onChangePassword} placeholder='Password' type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 ">
    <input  className='mx-2   form-check-input'  style={{border: "2px solid black"}}type="checkbox"   id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="d-grid gap-2">
  <button onClick={onClicks} className="btn     " style={{backgroundColor:"black", color:"white"}} type="button">Submit</button>
</div>
<label className="form-check-label mt-3" for="exampleCheck1">
    <span>haven't an account? </span> 
    <Link style={{textDecoration:"none"}} to="/register">
    <span style={{color:"#C70039"}}>click here</span>
    </Link>
</label>

{/* <label className="form-check-label mt-3 " style={{display:'block'}} for="exampleCheck1">
     <Link style={{textDecoration:"none"}} to="/admin/products">
    <span style={{color:"#C70039"}}>login as a admin</span>
    </Link>
</label>
<label className="form-check-label mt-3 " style={{display:'block'  }} for="exampleCheck1">
     <Link style={{textDecoration:"none"}} to="/user/orders">
    <span style={{color:"#C70039"}}>login as a user</span>
    </Link>
</label> */}
</form>    
  )
}

export default Loginpage
