import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Routes, Route } from 'react-router-dom';
import About from "./Component/Pages/About";
import Data from "./Component/Pages/Data";
import Home from "./Component/Pages/Home";
import Editor from "./Component/Pages/Editor";

const App = () => {
  return (
    <>      
      <Routes>
           <Route exact path='/about' element={< Home />}></Route>
           <Route exact path='add' element={< Data />}></Route>
           <Route exact path='/' element={< About />}></Route>
           <Route exact path='/edit/:id' element={< Editor />}></Route>
      </Routes>
   </>
  )
}
export default App;