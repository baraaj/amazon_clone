import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import './Login.css';
import {auth} from './firebase';
const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
     
     const navigate = useNavigate();
    const signIn= e =>{
        e.preventDefault();
       auth.signInWithEmailAndPassword(email,password)    
       .then((auth)=>{ if(auth){
         navigate('/');
       }}
      )
      .cath(err=>alert(err.message));
      }
    const register= e =>{
        e.preventDefault();
         auth.createUserWithEmailAndPassword(email,password)    
         .then((auth)=>{ if(auth){
           navigate('/');
         }}
        )
        .cath(err=>alert(err.message));
        }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
            <h1>Sign-in</h1>
                <form>
                    <label>Username</label>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password"value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>

            </div>
            
        </div>
    );
}

export default Login;
