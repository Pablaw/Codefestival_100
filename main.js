// Q70. 행렬 곱하기
a = [[1, 2], [2, 4]]

b = [[1, 0], [0, 3]]

let arr1 = a[0];
let arr2 = a[1];
let arr3 = b[0];
let arr4 = b[1];

let arr = '';
let arrAnswer0 =[];
let arrAnswer1 =[];
let answer = [];

for(let i=0; i < a.length; i++) {
    if(arr1[i] * arr3[i] !== 0) {
        arr = arr1[i] * arr3[i];
        arrAnswer0.push(arr);
    } else if (arr1[i] * arr4[i] !== 0) {
        arr = arr1[i] * arr4[i];
        arrAnswer0.push(arr);
    }
}
for(let j=0; j < a.length; j++) {
    if(arr2[j] * arr3[j] !== 0) {
        arr = arr2[j] * arr3[j];
        arrAnswer1.push(arr);
    } else if (arr2[j] * arr4[j] !== 0) {
        arr = arr2[j] * arr4[j];
        arrAnswer1.push(arr);
    }
}
answer.push(arrAnswer0);
answer.push(arrAnswer1);
console.log(answer);

