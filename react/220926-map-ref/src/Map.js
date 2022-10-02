import React, {useState} from 'react';

function Map() {
    const [list, setList] = useState(['test', 'testing', 'apple', 'sesac', 'animal'] );
    function filterCheck () {
        let lists = ['test', 'testing', 'apple', 'sesac', 'animal']
        let newLists = [...lists, 'dog']; // ... -> 전개연산자 
        

        let newList = [];
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].length > 4) newList.push(lists[i]);
        } 
        newList = list.filter((value) => {
            return value.length > 4;
        })
    }


    function addElement() {
        console.log([...list, 's'])
        setList([...list, 's']);
        
        let newList = [];
    for ( let i = 0; i < list.length; i++ ) {
      console.log( i );
      console.log( list[i] );
      newList.push( i + list[i] );
     }
     newList = list.map((value, i) => {
      console.log( i );
      console.log( value );
      return i + value;
     })
     console.log( newList );
  }
    
    return (
        <div>
          {list}
          <ul>
            {list.map((name, i) => {
              return <li key={"li_"+i}> {name}</li>
            })}
          </ul>
          <ul>
            {list.filter((name) => {
               name.includes("a");return
            })}
          </ul>
          <button onClick={addElement}>추가</button>
        </div>
      );
    }

export default Map;

// let list = ['a', 'b', 'c']
// let newlist = list.map((value, index, arr) => {
//     console.log(value);
//     console.log(index);
//     console.log(arr);
//     return value + index;

// console.log(newlist);

// for ( let i = 0; i < lists.length; i++ ) {
//     if ( lists[i].length > 4 ) newList.push(lists[i]);
//   }
//   newList = lists.filter((value) => {
//     return value.length > 4;
//   })