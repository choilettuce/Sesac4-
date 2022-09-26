import React, {useState}  from 'react';

const Ex = () => {
    const [inform, setinform] = useState([
        {id : 1, name: '윤소희', email : 'yoonsohee@gmail.com'},
        {id : 2, name: '코디', email : 'codi@gmail.com'}
        
    ]);

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [nextId, setNextId] = useState(1);
    
    const onChange = (e) => setInputName(e.target.value);
    const onChange2 = (e) => setInputEmail(e.target.value);
    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    };
    const onClick = () => {
        const nextinform = inform.concat({
            id : nextId,
            name: inputName,
            email: inputEmail
        }); 
        setNextId(nextId + 1);
        setinform(nextinform);
        setInputName('');
        setInputEmail('');
    }
    const namesList = inform.map(name => <div key={name.id}> {name.name} : {name.email}</div>);


    return(
        <div>
            <input value={inputName} onChange={onChange} placeholder='이름'></input>
            <input value={inputEmail} onChange={onChange2} onKeyPress={onKeyPress} placeholder='이메일' ></input>
            <button onClick={onClick} >추가</button>
            <div> {namesList}</div>
        </div>

    )
}

export default Ex;