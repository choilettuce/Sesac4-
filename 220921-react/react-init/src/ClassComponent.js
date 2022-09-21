import React, { Component } from 'react';
import PropTypes from 'prop-types'

//클래스!!

class ClassComponent extends Component {
    render() {
        return (
                    <div>
                        {this.props.children}
                        <h2>ClassComponent - function</h2>
                        <h5>name : {this.props.name}</h5>
                        <h5>location : {this.props.location}</h5>
                    </div>
                );
    }
static propTypes = {
    name: PropTypes.string
}
}


// 클래스형 컴포넌트 쓸때는 이구조 이용!! 걍 암기!!
// 무조건 render 함수 이용
// 클래스형에서는 this로 

// 함수형!!

// function ClassComponent (props) {
//     return (
//         <div>
//             {props.children}
//             <h2>ClassComponent - function</h2>
//             <h5>name : {props.name}</h5>
//             <h5>location : {props.location}</h5>
//         </div>
//     )
// }

// ClassComponent.PropTypes = {
//     name : PropTypes.string
// }

ClassComponent.defaultProps = {
    name : '기본이름',
    location : '기본위치'
}


export default ClassComponent;