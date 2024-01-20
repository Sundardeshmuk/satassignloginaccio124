import './App.css';
import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Userlogin from './components/Db/userlogin';
import Profile from './components/Db/profile';
function App() {
  const [count,setcount]=useState(0);
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Userlogin/>}/>
    <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
