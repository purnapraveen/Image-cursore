import React from'react';
import classes from './Topbar.module.css'

const Topbar=(props)=>{
    console.log(props);
    return(
        
            
        <header >
        <nav className={classes.Topbar}>
          <img   src="https://digitalconnect.valuejunction.in/static/media/valuejunction.14aa8126.png" alt="ValueJunctionLogo"/>
        </nav>
          
        </header>
        

    )
}
export default Topbar;