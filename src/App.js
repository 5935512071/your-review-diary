import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {AuthProvider} from './components/Auth'
import Navbar from './components/Navbar/Navbar'
import Loginup from './components/Loginup'


function App() {
  return (
    <AuthProvider>
      <Router>
         <Switch>
            <Route exact path="/"><Navbar/></Route>
            <Route exact path="/Home"><Home /></Route>           
            <Route exact path="/Register"><Register /></Route>
            <Route exact path="/Login"><Login /></Route>
            <Route exact path="/Loginup"><Loginup /></Route>
            </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
