import React, { Component } from 'react';
import './App.css';

	
class App extends Component {
  render () {
  const name = "react!"
  const name2 = "보보";
  const animal = "멍멍이";
  var calcul = 3+5;
  var a = 9;
  var b = 5;
  var title = "로그인"
  var name3 = "최상훈"
  return (
  <>
  <div className="react">{name}</div>
  <div>"이것은 div입니다"<h3>이것은 div안에 있는 h3태그 입니다.</h3></div>
  <h2>제 반려 동물의 이름은 {name2}입니다. <br/>{name2}은 {animal} 입니다</h2>
  <div>{calcul === 8 ? <p>"정답입니다"</p> : <p>"오답입니다"</p>}  </div>
  <div>{a > b && <p>a가 b보다 큽니다</p> }</div>
  <div className="title">{title}</div>
  <div className="idpassword">아이디 : <input></input></div>  
  <div className="idpassword">패스워드 : <input></input></div>  
  
  <div className="red"></div>
  <div className="orange"></div>
  <div className="yellow"></div>
  <div className="green"></div>
  <div className="blue"></div>
  <div className="navy"></div>
  <div className="purple"></div>
  <div classname="mystyle" >{name3}</div>

  </>
  )
  }

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  
    //  <>
    //   <h1>{name} 안녕!</h1>
    //   <h2>잘 작동하니?</h2>
    //  </>
}

export default App;
