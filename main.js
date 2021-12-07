// Q70. 행렬 곱하기
// a = [[1, 2], [2, 4]]

// b = [[1, 0], [0, 3]]

// let arr1 = a[0];
// let arr2 = a[1];
// let arr3 = b[0];
// let arr4 = b[1];

// let arr = '';
// let arrAnswer0 =[];
// let arrAnswer1 =[];
// let answer = [];

// for(let i=0; i < a.length; i++) {
//     if(arr1[i] * arr3[i] !== 0) {
//         arr = arr1[i] * arr3[i];
//         arrAnswer0.push(arr);
//     } else if (arr1[i] * arr4[i] !== 0) {
//         arr = arr1[i] * arr4[i];
//         arrAnswer0.push(arr);
//     }
// }
// for(let j=0; j < a.length; j++) {
//     if(arr2[j] * arr3[j] !== 0) {
//         arr = arr2[j] * arr3[j];
//         arrAnswer1.push(arr);
//     } else if (arr2[j] * arr4[j] !== 0) {
//         arr = arr2[j] * arr4[j];
//         arrAnswer1.push(arr);
//     }
// }
// answer.push(arrAnswer0);
// answer.push(arrAnswer1);
// console.log(answer);

//Q71. 깊이 우선 탐색
//Q71-Q74 노드 문제

// Q75. 이상한 369
// const n = prompt ('숫자를 입력하세요.','');
// const arr = [];
// let answer = 0;

// for(let i=1; i <= n; i++){
//     arr.push(i);
// }

// for(let i=1; i <= n; i++) {
//     for(let j=1; j <= 3; j++) {
//         if( arr[i] % 3 === 0 && parseInt(arr[i] / 3) == `${j}`) {
//                     answer += 1;
                    
//         }
// }
// }
// console.log(answer);
// function sol(n){
//     let answer = 0;
//     let count = 1;
//     const d = {3 : 1, 6 : 2, 9 : 3};
    
//     while (n.length !== 0){
//         answer += d[parseInt(n.pop(), 10)] * count;
//         count *= 3;
//     }       
//     return answer;
// }

// const user_input = new String(prompt('입력해주세요')).split('');

// console.log(sol(user_input));
// Q76. 가장 긴 공통 부분 문자열
// const str1 = prompt('문자를 입력하세요', '').toUpperCase().split('');
// const str2 = prompt('문자를 입력하세요', '').toUpperCase().split('');
// let arr = [];
// let value = [];
// solution: for(let i=0; i < str1.length; i++) {
//    for(let j=0; j < str2.length; j++) {
//         if(str1[i] === str2[j]) {
//             let add = str2.shift();
//             arr.push(add);
//             console.log(arr);
//             continue solution;
//         } else { value.push(arr.length);
//             console.log(arr.length);
//         }
//    }
// }
// console.log(value);

function solution (string) {
    let result = [];
    for(let i=1; i < string.length+1; i++) {
        for (let j=0; j < i; j++) {
            result.push(string.slice(j, j+string.length-i+1));
        }
    } 
    return result;
}

const strOne = prompt('문자를 입력하세요', '').toUpperCase();
const strTwo = prompt('문자를 입력하세요', '').toUpperCase();
const arrOne = solution(strOne);
const arrTwo = solution(strTwo);

let intersection = arrOne.filter(x => arrTwo.includes(x));

intersection.sort((a, b) => {
    return b.length - a.length;
});

console.log(intersection[0].length);