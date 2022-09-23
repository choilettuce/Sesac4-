import React from 'react';
import ReactDOM from 'react-dom/client';
// import StateClass from './StateClass';
// import StateFunction from './Statefunction'
// import StateComponent from './StateComponet';
// import StatefunctionPractice from './StateFunctionPractice';
import Event from './Event';
// import Event2 from './Event2';
// import EventClass from './EventClass';
import Event3 from './Event3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateClass name='SeSAC'/>
    <StateFunction />
    <StateComponent />
    <StatefunctionPractice /> */}
    <Event /> 
    <Event3 />
    {/* <Event2 />
    <EventClass /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

