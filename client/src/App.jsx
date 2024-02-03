import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage"
import { VideoPlayer } from './pages/VideoPlayer/VideoPlayer';


export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/player" element = {<VideoPlayer/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}