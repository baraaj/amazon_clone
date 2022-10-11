import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Routes, Link, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
 


function App() {
  useEffect(() => {
    // will only run once when the app component loads...

  }, []);
  return (
    <Router>
    <div className="app">
    {window.location.pathname !== "/login" ? <Header /> : null}{" "}
    <Routes>
    <Route exact path="/login" element={<Login/>} >
         </Route>
       
       <Route exact path="/checkout"  element={<Checkout/>}>
      
         </Route>
         <Route exact path="/" element={< Home />}>
        
         </Route>
      
      
    </Routes>
    </div>
    </Router>
  );
}

export default App;
