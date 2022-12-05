// : 타입표기 (Type Annotation)

var str : string = 'hi';
let num : number = 1;
let flag : boolean = true;
let age : number | string;
age = 10;
age = 'a';
// 문자열 숫자 모두 가능

let any : any;

// Array
let arr1 : number[] = [1,2,3,4,5];
let arr2 : string[] = ['h','e','l','l','o'];
let arr3 : Array<number> = [1,2,3,4,5];

//Tuple 
let arr4 : [string, number] = ['str',1];
arr4[0].concat();
// concat 메서드는 문자열에는 사용가능하나 숫자에는 못쓴다....

// Enum
enum Names { 홍길동, 코딩온, 새싹};
let name1 : Names = Names.홍길동;

//Void 
// 함수 : 반환값이 없는 친구 / 변수에는 undefined 와 null만 들어갈 수 있다.

let void1 : void = undefined;

function void2() : void {
    console.log('11');
}

// never
// 함수에 사용. 함수의 끝에 절대 도달하지 않는다

// function neverEnd() : never {
//     while(true) {

//     }
// }

// any vs Object
let test :any; // 모든타입허용
test = 1;
test = [1,2,3];

let test2 : object; // 기본타입을 제외한 나머지 모두(array, tuple등)

test2 = [1,2,3];
