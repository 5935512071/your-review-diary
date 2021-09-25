import React ,  { useContext} from 'react'
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../config'
import { AuthContext } from './Auth'



const Home = () => {
    const {currentUser} = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to = "/login" />;
    }
    return
    <div>
        <div className="welcome">
            <h1>WELCOME</h1>
            <button onCilck={() => firebaseConfig.auth().signOut()} class="btn btn-danger"> signup</button>

        </div>
    </div>

   
}
export default Home;