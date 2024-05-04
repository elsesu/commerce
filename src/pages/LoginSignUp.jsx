import React from 'react'
import './login.css'






const LoginSignUp = () => {
  return (
    <div className='login-signup'>
      <div className='login-container'>
        <h1>Sign Up</h1>
        <div className='fields'>
          <input type="text" placeholder='enter name'/>
          <input type=""  placeholder='email'/>
          <input type="" placeholder='password'/>
        </div>
 <button> continue </button>
 <p className='login-login'>Already have an Account? <span>login</span></p>
     <div className='agree'>
      <input type="checkbox" name='' id='' />
      <p className=''>by continuing you agree to terms and conditions</p>
     </div>
      </div>
    </div>
  )
}

export default LoginSignUp
