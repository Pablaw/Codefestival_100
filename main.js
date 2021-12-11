// Q1. 가운데 글자 가져오기
/*단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다. */

// function solution(s) {
//     var answer = '';
//     if (s.length % 2 === 0) {
//         answer = s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)]
//     } else {
//         answer = s[Math.floor(s.length/2)]
//     }
//     return answer;
// }

// console.log(solution('qwer'));
//Q2. 약수의 개수와 덧셈
/* function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++) {
        if(Math.sqrt(i) === Math.floor(Math.sqrt(i))) {
            answer -= i;
        } else {
        answer += i;
        }
    }
    return answer;
}

console.log(solution(24, 27)); */
//Q3. K번째수
/* function solution(array, commands) {
    var answer = [];
    for (let i=0; i < commands.length; i++) {
        let extra = commands[i];
    let sol = array.slice(extra[0] - 1, extra[1]);
        sol.sort((a, b) => a - b);
        answer.push(sol[extra[2]-1]);
    }
    return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array, commands));*/
//Q4. 완주하지 못한 선수
function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    for (let i=0; i < participant.length; i++){  
        if(participant[i] === completion[i]) {
        } else {
            answer = participant[i];
            break;
        }
    }
    return answer;
}
let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion = ["josipa", "filipa", "marina", "nikola"]
console.log(solution(participant, completion));
