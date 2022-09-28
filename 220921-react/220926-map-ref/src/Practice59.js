import React, {useState} from 'react';

function Practice59() {
    const [list, setList] = useState([]);
    const [results, setResult] = useState([]);

    function writerList() {
        let form = document.getElementById("form_write");
        let newList = {
            writer : form.writer.value,
            title : form.title.value
        };

        setList([...list, newList])
    }

    function searchList () {
        let form = document.getElementById("form_search");

        // 작성자 기준으로
        let newList = list.filter((result) => {
            // result = { writer : ~~, title: ~~~ }
            return result[form.type.value].includes(form.search.value);
        })
        setResult(newList)
    }

    return (
        <div>
            <form id="from_writer">
                <input type="text" name="writer" placeholder='작성자'></input>
                <input type="text" name="title" placeholder='작성자'></input>
                <botton type='button' onClick={writerList}>작성</botton>
            </form>
            <form id="form_search">
                <select name="type"> 
                <option value='writer'>작성자</option>
                <option value='title'>제목</option>
                </select>
                <input type="text" name="search" placeholder='검색어' />
                <button type='button' onClick={searchList}>검색</button>
            </form>
            {
                results.length
            }
            <h4>검색결과</h4>
            <table border={1}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, i ) => {
                        return(
                            <tr>
                            <td>{i+1}</td>
                            <td>{value.title}</td>
                            <td>{value.writer}</td>
                            </tr>
                        )
                    })};
                </tbody>
            </table>
        </div>
    )   
}
export default Practice59;