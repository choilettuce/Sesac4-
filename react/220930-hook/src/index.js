import React from 'react';
import ReactDOM from 'react-dom/client';
// import Hook from './Hook';
// import Reducer from './useReducer'
// import Memo from './useMemo'
// import UseSass from './5UseSass'
// import Origin from './4Origins';
// import CSSModule from './6CSSModule';
// import StyeldComponent from './7StyledComponent';
import Worm from './Worm'
import MovingCircle from './MovingCircle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook />
    {/* <Reducer />
    <Memo></Memo> */}
    {/* <Origin />
    <hr/>
    <UseSass />
    <hr />
    <CSSModule />
    <hr />
    <StyeldComponent />
    <hr /> */}
    {/* <Worm></Worm>
    <hr></hr>
    <MovingCircle /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

