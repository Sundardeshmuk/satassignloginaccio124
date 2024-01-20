import React, { useEffect, useState } from 'react'

const Profile=()=> {
    const [userdata,setItems]=useState('');
   
    useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('userdata'));
    if (items) {
        setItems(items);
    }
},[])
console.log(userdata);
  return (
    <div>
      <h1>{userdata.id}</h1>
      <h1>{userdata.username}</h1>
      <h1>{userdata.email}</h1>
      <h1>{userdata.firstName}</h1>
      <h1>{userdata.lastName}</h1>
    <img src={userdata.image} height="200" width="200"/>
    </div>
  )
}

export default Profile
