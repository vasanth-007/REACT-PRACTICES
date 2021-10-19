import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Greetings extends React.Component{
    constructor(props){
        super(props);
        this.state = {greets : "welcome home",name : "buddies"};
    }
    change=()=>{
        this.setState({greets : "thanks for coming!!!"});
    }
    render(){
        return(
        <div>
            <h2>{this.state.greets} {this.state.name}</h2>
            <button type="button" onClick={this.change}>exit</button>
        </div>
        )
    }
}
ReactDOM.render(<Greetings />,document.getElementById("root"));