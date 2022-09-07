const getJSON = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, ture);
    xhr.responseType = 'JSON';
    xhr.onload = function() {
        const status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        }else {
            callback(status, xhr.response);
        }
    };
    xhr.send(); 
}

getJSON('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fbb5223b63dfd5862ea66acc67284ca7&units=metric',
function(err, data) {
    if(err !== null) {
        alert('예상치못한 오류발생' + err);
    } else {
        alert(`현재온도는 ${data.main.temp}도 입니다.`);
    }
})