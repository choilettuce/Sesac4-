const fs = require("fs").promises;

// fs.writeFile('./write.txt','안녕')
//     .then(() => {
//         console.log("작성완료");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// fs.copyFile("./write.txt", "./new.txt")
//     .then(() => {
//         console.log("복사완료");
//     })
//     .catch((err)=> {

//     });

async function exec() {
    await fs.writeFile("./write2.txt", "안녕");
    await fs.copyFile("./write2.txt", "./new2.txt");

}

exec();