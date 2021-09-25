import MenuItems from './MenuItems'
import React from 'react'
//import {Link} from 'react-router-dom'

class Navbar extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               'MenuItemsActive': ''
               
           }
       }

    render(){
        return(
            <nav>
               
                <h1 className="naver-logo">Your's Review diary<i className="fab fa-react"></i></h1>
                
                <ul>
                    <MenuItems item="Home" tolink="/"></MenuItems>  
                    <MenuItems item="My diary" tolink="/My diary"></MenuItems>
                    <MenuItems item="หมวดหมู่ต่าง ๆ" tolink="/หมวดหมู่ต่าง ๆ"></MenuItems>
                    <MenuItems item="Contact" tolink="/Contact"></MenuItems>
                    <MenuItems item="Loginup" tolink="/Loginup"></MenuItems>
                </ul>
      
            </nav>
        )
    }
}
   
export default Navbar