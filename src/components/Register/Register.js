import React ,  {useState} from 'react'
import './Register.css'
import firebaseConfig from '../../config'
import { Redirect } from 'react-router-dom'
//import { AuthContext } from './components/Auth';

const Register = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit= (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;

        try{
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
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
            <form onSubmit = {handleSubmit}> 

                <div className="inbody" action="" >
                    <label className="signin">  Sign up </label>
                    <p>
                    <label  htmlFor="email"> E-mail : </label>
                    <input className="email" type="text" name="email" id="email" /></p>
               
                    <p>
                    <label htmlFor="password"> Password : </label>
                    <input className="password" type="text" name="password" id="password"/></p>
                    <p>

                    <button className="signup" type="Sign up">submit</button></p>
                
                </div>
            </form>
           


        </>
    )
}

export default Register