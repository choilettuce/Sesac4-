import React, { Component } from 'react';
import './Refpractice.css';

class Refpractice extends Component {
    render() {


        return(
            
            <div className='div1' ref={(ref) => {this.div1=ref}}>
            <div className='div2'></div>    
            <button onClick={() => this.div1.scrollBottom()}>맨 밑으로</button>
            </div>
            
            
        );
    }
}
 
export default Refpractice;