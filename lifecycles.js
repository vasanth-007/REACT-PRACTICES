import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';

class Greetings extends React.Component{
    constructor(){
        super()
        this.state={
            person : "people",
            messege : "welcome",
        }
    }
    render(){
        return(
        <div>
        <h1> {this.state.person} {this.state.messege}</h1>
        <button type="button" onClick={this.componentWillUnmount}>delete</button>
        </div>
        )
    }
    shouldComponentUpdate(){
        return true;
    }
    componentWillUnmount=()=>{
        this.setState({person : false , messege : false});
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({person : "thanks for coming"})
        },4000)
    }
    componentDidUpdate(){
        alert("do you want to made some changes?")
    }
}
ReactDOM.render(<Greetings />,document.getElementById("root"));

export default Greetings;