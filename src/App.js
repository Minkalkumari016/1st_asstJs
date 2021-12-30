import React, { Component } from "react";
import './App.css';
import './components/style.css';
import ContaierClass from './components/ContainerClass.js';
import ContainerFunctional from './components/ContainerFunctional.js';

class App extends Component{
  state={
    isClass:false,
    isFunctional:false
  }
  
  change1 =() => { this.setState({isFunctional:!this.state.isFunctional})}
  change2(){this.setState({isClass:!this.state.isClass})}

  render() {
    return (
      <div >
        <div>
            <h1 className ='Shadow'>Styling using functional and class component</h1>
            <div className ='flex center'>
                <button className ='btn1'onClick = {this.change1}>click for functional component</button>
                <button className ='btn2'onClick = {()=>this.change2()}>click for class component</button>
            </div> 
        </div>
        <div className ='flex center'>
          {this.state.isFunctional? <ContainerFunctional/>:null}
          {this.state.isClass? <ContaierClass/>:null} 
        </div>
      </div>
  );
}
}
export default App;