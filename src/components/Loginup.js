import React ,  { useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'


const Loginup = () => {
    const {currentUser} = useContext(AuthContext);

    return (
        <>
            <div className="Welcome">
                <h1>WELCOME</h1>
                {currentUser ? (
                    <p>You are log in <Link to="/Home">View Home</Link></p>
                ) : (
                        <p>
                            <Link to="/Login" className="btn btn-primary">Log In</Link> or <Link to="/Register" className="btn btn-primary"> Signup</Link>
                        </p>
                )}
            </div>
        </>
    )
}

export default Loginup;