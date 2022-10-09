import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Routes, Link, Route} from "react-router-dom";
import Checkout from './Checkout';
 


function App() {
  return (
    <Router>
    <div className="app">
    <Header />
    <Routes>
     
       <Route exact path="/checkout" element={<Checkout/>}>
         </Route>
         <Route exact path="/" element={< Home />}>
         </Route>
      
      
    </Routes>
    </div>
    </Router>
  );
}

export default App;