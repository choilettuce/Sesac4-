

console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.uptime());
console.log(process.execPath);
console.log(process.cpuUsage);
console.log(process.env);


//os 모듈
const os =require("os");

console.log(os.hostname());

//path 모듈

const path =require("path");
const string = __filename;
console.log(path.extname(string));