import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom";
import {auth} from "./Firebase";

function Login(){

    //allows us to programmatically change the url
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase login shitttttttttttttttttttt
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(e => alert(e.message))

    }

    const register = e => {
        e.preventDefault();
        //firebase register shitttttttttttttttttttt
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created user with email and password
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }

    return(
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                   By signing-in you agree to Amazon Fake Clone conditions
                   and Use & sale. Please see our privacy notice, our
                   Cookies Notice and our Interest-Based Ads.
                </p>
                <button onClick={register} className="login__registerButton">Create Amazon Account</button>
            </div>

        </div>
    )
}

export default Login