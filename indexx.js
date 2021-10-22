import ReactDOM from 'react-dom';
import React from 'react';
import Navbar from './amazonenav.js';
import Main from './mainpage.js';


function Rootcomponent(){
    return(
        <div>
        <Navbar />
        <Main />
        </div>
    )
}
ReactDOM.render(<Rootcomponent />,document.getElementById("root"));
