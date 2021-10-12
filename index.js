import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Car from './car.js';

class Vehicles extends React.Component{
    render(){
        return(
            <div>
                <h2>Welcome home</h2>
                <Car/>
            </div>
        )
    }
}
ReactDOM.render(<Vehicles />,document.getElementById("root"));