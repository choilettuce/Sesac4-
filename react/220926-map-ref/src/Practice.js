import React, {useState} from 'react';
 
const Practice = () => {
    const [inform, setInform] = useState([
        { num : '',  subject : '' , name : ''}
    ]);

    const [InputSubject, setInputSubject] = useState('');
    const [inputName, setInputName] = useState('');
    const [nextNum, setNextNum] = useState(0);

    const onChange1 = (e) => setInputSubject(e.target.value);
    const onChange2 = (e) => setInputName(e.target.value);
    
    const onClick = () => {
        const nextinform = inform.concat({
            num : nextNum,
            subject : InputSubject,
            name : inputName
        })
        setNextNum(nextNum + 1)
        setInform(nextinform)
        setInputName('');
        setInputSubject('');
    
    }

    const List = inform.map(name => <tr><td>{name.num}</td><td>{name.subject}</td><td>{name.name}</td></tr>)

    return (
        <div>
            <div>
            <input value={inputName} onChange={onChange2} placeholder='작성자' >작성자 :</input>
            <input value={InputSubject} onChange={onChange1} placeholder='제목'>제목 : </input>
            <button onClick={onClick} >작성</button>
            <table cellspacing="10" cellpading="10">
                {List}
            </table>
            </div>
        </div>
    )
}

export default Practice;