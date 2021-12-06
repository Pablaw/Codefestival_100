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
function sol(n){
    let answer = 0;
    let count = 1;
    const d = {3 : 1, 6 : 2, 9 : 3};
    
    while (n.length !== 0){
        answer += d[parseInt(n.pop(), 10)] * count;
        count *= 3;
    }       
    return answer;
}

const user_input = new String(prompt('입력해주세요')).split('');

console.log(sol(user_input));