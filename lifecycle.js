import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Market extends React.Component{
    constructor(){
        super();
        this.state ={
            item : "fruits",
            cost : 350,
        };
    }
    comp
    render(){
        return <h2>i bought {this.state.item} and it costs {this.state.cost} INR</h2>;
    }
}

ReactDOM.render(<Market />,document.getElementById("root"));