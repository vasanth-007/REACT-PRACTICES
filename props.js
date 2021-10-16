import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//class
class Vehicles extends React.Component{
    render(){
        return(
            <div>
                <h2>i have {this.props.name} vehicle and its {this.props.type}</h2>
                <h2>{this.props.type} is a car</h2>
            </div>
        )
    }
}
class Vehiclestwo extends React.Component{
    render(){
        return(
            <div>
                <h2>i have {this.props.name} vehicle and its {this.props.type}</h2>
                <h2>{this.props.type} is a car</h2>
            </div>
        )
    }
}


ReactDOM.render(<Vehicles name="car" type="ford"/>,document.getElementById("root"));