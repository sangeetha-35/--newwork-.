import { Component } from "react";

class Addcart extends Component{

state={
    count:1,
    name :"dhurv "
};
handleclick = ()=>{
    this.setState({count:this.state.count+1})
}

handlename = ()=>{
    this.setState({name:"sahasra"})
}

    render(){
        return(
            <>
            <div>
                <h1>Addcart Task</h1>

                <h1>count: {this.state.count}</h1>
                <h1>name:{this.state.name}</h1>
                <button onClick={this.handleclick}>Add</button>
            <button onClick={this.handlename}>Change name</button>

            </div>
            
                       
            </>
        )
    }
}export default Addcart
