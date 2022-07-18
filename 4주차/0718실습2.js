const url = require("url");
const { URL } = url;

const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=%EC%83%88%EC%8B%B9&tqi=hWg%2F9wprvN8ssPCp3BNssssssO8-030424"
const naver = new URL(string);


const params = new URLSearchParams(string);


//for (const name of params.keys()) {
//  console.log(name); }



console.log(naver.SearchParams.keys());
console.log(naver.SearchParams.value());
naver.SearchParams.delete('sm');
console.log(naver.SearchParams.keys());