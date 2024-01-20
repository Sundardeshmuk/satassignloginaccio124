import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Userlogin=()=> {
  const navigate = useNavigate();
  const [usernameState,setusernamestate]=useState('');
  const [passwordState,setpasswordState]=useState('');

  const userAuth=()=>{
    fetch('https://dummyjson.com/auth/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {username:usernameState,
        password:passwordState,}
        )
      }).then(res =>res.json())
       .then(data => {
         console.log(JSON.stringify(data),"data")
         if(data){
           localStorage.setItem('userdata',JSON.stringify(data)) 
           navigate("/profile");
          }
        }
        )
      }
    
    // useEffect(()=>{
// userAuth();
    // },[]);
  return (
    <div className='userContainer'>
      <h4>Welcome back</h4>
      <h1>Sign in to your account</h1>
    <label>Your email</label>
    <input type='text'onChange={(e)=>setusernamestate(e.target.value)}></input>
    <label>Password</label>
    <input type='password'onChange={(e)=>setpasswordState(e.target.value)}></input>
    <button onClick={()=>userAuth()}>CONTINUE</button>
    <h4>Forget your password</h4>
    </div>
  )
}

export default Userlogin;
