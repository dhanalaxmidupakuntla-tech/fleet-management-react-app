import React, { useContext, useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef();
    const navigate = useNavigate();
    const {setIsAuth } = useContext(AuthContext)

    useEffect(( )=> {
        emailRef.current.focus();
    }, []);

    const handleLogin = () => {
        if(email === "admin@gmail.com" && password === "admin1234"){
            alert("Login success");
            setIsAuth(true);
            navigate("/admin");
        }else{
            alert("Wrong email or password");
        }
    }
    
  return (
    <div>
        <h2>Login</h2>

        <input 
            ref={emailRef}
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

        <br />

        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
