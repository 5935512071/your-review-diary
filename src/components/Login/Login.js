
import React ,  {useState} from 'react'
import './Login.css'
import firebaseConfig from '../../config'
import { Redirect } from 'react-router-dom'
//import { AuthContext } from '../Auth'

const Login = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const handleLogin = (e) => {
        e.preventDefault();

        const {email, password} = e.target.elements;

        try{
            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
        } catch(error) {
            alert(error);
        }

    }

    

    if(currentUser) {
        return <Redirect to="/Home" />;
    }

    return (
        <>
            <form onSubmit = {handleLogin}> 

                <div className="inbody" action="" > 
                    <label className="signin"> Have an account? Sign in </label>
                    <p>
                    <label  htmlFor="email"> E-mail : </label>
                    <input className="email" type="text" name="email" id="email" /></p>
                

                    <p>
                    <label htmlFor="password"> Password : </label>
                    <input className="password" type="text" name="password" id="password"/></p>
                
                    <p>
                    <button className="submit" type="submit">Login</button>
                  
                    </p>
                </div>
            </form>
           


        </>
    )
}

export default Login