const os = require("os");

//사용가능 메모리, 전체 메모리, 홈디렉토리 경로
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());

const path =require("path");

//경로 구분자, 현재파일 확장자, 현재파일 경로 분리 출력
console.log(path.sep);
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.delimiter);