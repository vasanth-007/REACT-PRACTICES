import React from 'react';
import { ReactDOM } from 'react';
import './amazonestyle.css';

class Navbar extends React.Component{
    render(){
        return(
            <>
              <nav className="navbar navbar-expand justify-content-center">
                   <div className="navbar-brand">
                         <img src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png" height="80px" alt="amazone logo"></img>
                   </div>
              </nav>
            </>
        )
    }
}
export default Navbar;