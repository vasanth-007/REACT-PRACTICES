import ReactDOM from 'react-dom';
import React from 'react';
import './instagram.css';
import './instagram.js';
function Instagram(){

    const openbtn = () =>{
        document.getElementById("openbtmnav").style.visibility ="visible";
        document.getElementById("openbtmnav").style.height ="440px";
        document.getElementById("openbtmnav").style.transition ="0.9s";
        document.getElementById("openbtmnav").style.top ="0px";
    }

    const closebtn = () =>{
        document.getElementById("openbtmnav");
        var x = document.getElementById("close");
        x.addEventListener("click",myfun);
        function myfun(){
            document.getElementById("openbtmnav").style.visibility ="hidden";
            document.getElementById("openbtmnav").style.transition ="0.5s";
            document.getElementById("openbtmnav").style.top = "450px";
        }
    }
    const mystyle={
        color : "white",
        cursor : "pointer",
    };
    const mystyleone={
        color : "white",
        cursor : "pointer",
        padding : "10px",
    };
    const mystyletwo ={
        color : "white",
        fontFamily:"'Dancing Script', cursive",
    }
    return <div>
             <div className="nav-container">
                 <div><span style={mystyletwo}>Instgram</span></div>
                 <div>
                     <a className="nav-link"><i className="fas fa-bars" onClick={openbtn} style={mystyle}></i></a>
                 </div>           
             </div>

             <div className="bottom-navbar" id="openbtmnav">
             <ul className="navbar-nav">
             <li className="nav-item">
                 <i className="fas fa-cog" style={{color:"white"}}></i>
                  <span>Settings</span>
              </li>
              <li className="nav-item">
                 <i className="fas fa-history" style={{color:"white"}}></i>
                  <span>Archive</span>
              </li>
              <li className="nav-item">
                 <i className="fas fa-user-clock" style={{color:"white"}}></i>
                  <span>Your Activity</span>
              </li>
              <li  className="nav-item">
                 <i className="fas fa-qrcode" style={{color:"white"}}></i>
                  <span>QR Code</span>
              </li>
              <li  className="nav-item">
                 <i className="fas fa-tasks" style={{color:"white"}}></i>
                  <span>Close Friends</span>
              </li>
              <li  className="nav-item">
                 <i className="fas fa-user-plus" style={{color:"white"}}></i>
                  <span>Discover People</span>
              </li>
              <li className="nav-item">
              <i><span onClick={closebtn} style={mystyleone} id="close">close</span></i>
              </li>
             </ul>
             </div>
        </div>
}
ReactDOM.render(<Instagram />,document.getElementById("root"));



