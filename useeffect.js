function Greetings(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        alert("state updated");
    })
    const myFun = ()=>{
            setTimeout(()=>{
                setCount(count+1);
            },1000);
    }
    return(
    <div>
    <h2>You clicked this {count} times</h2>
    <button type="button" onClick={myFun}>click</button>
    </div>
    )
}
ReactDOM.render(<Greetings />,document.getElementById("root"));
