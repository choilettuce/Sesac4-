import React, {useState} from 'react';

function StateFunctionPractice () {
    const [num, setnum] = useState(0);
        //this.state {
        //     msg : ""     
        // }

    const Increase = () => {
        setnum (num + 1);   
        // setnum("메세지")
        // setState ({msg : "메세지"})
    }
    const Decrease = () => {
        setnum (num - 2); 
    }


    return (
    <div>
        <p>{num}</p>
        <button onClick={Increase}>증가</button>
        <button onClick={Decrease}>감소</button>
    </div>
    )     
}

export default StateFunctionPractice;