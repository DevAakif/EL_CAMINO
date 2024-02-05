import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage"
import { VideoPlayer } from './pages/VideoPlayer/VideoPlayer';
import { SignUp } from './pages/SignUp/SignUp';
import { Login } from './pages/Login/Login';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/player/:id" element = {<VideoPlayer/>}/>
        <Route path = "/signup" element = {<SignUp/>}/>        
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;