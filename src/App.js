import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Routes, Link, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
 


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
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
         <Route exact path="/payment"  element={<Payment/>}>
      
         </Route>
         <Route exact path="/" element={< Home />}>
        
         </Route>
      
      
    </Routes>
    </div>
    </Router>
  );
}

export default App;
