import React, { Component } from 'react';


class StateComponent extends Component {
    state = {
     number : 0,    
    } 
    
    render() {  
        return (
            <div>
              <div>StateClass {this.state.number}</div>
              <button onClick={()=>{
                this.setState(prevState => {
                  return {number: prevState.number + 2 }
                });
                }}>+2</button>
              <button onClick={()=>{this.setState(prevState => {
                  return {number: prevState.number - 1 }
                });
                }}>-1</button>
            </div>
                );
    }
  }
  
  export default StateComponent;