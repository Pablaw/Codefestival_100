// Q70. 행렬 곱하기
a = [[1, 2], [2, 4]]

b = [[1, 0], [0, 3]]

let arr1 = a[0];
let arr2 = a[1];
let arr3 = b[0];
let arr4 = b[1];

let answer = '';
let arrAnswer =[];

for(let i=0; i < a.length; i++) {
    if(arr1[i] * arr3[i] !== 0) {
        answer = arr1[i] * arr3[i];
        arrAnswer.push(answer);
    }
}
console.log(arrAnswer);

