import React from 'react';
import { Link } from 'react-router-dom';


const Navbar =()=>{
    return(
        <div >
            
            
            
            <div >
                <h1 >nav bar</h1>
            </div>
            
        
            
            <ul >
                <list ><Link  to="/">Home</Link></list>
                <list ><Link  to="/About">About </Link></list>
                
                <list ><Link  to="/Contact">Contact</Link></list>
            </ul>
            
        </div>
        
  
    )
}
export default Navbar;