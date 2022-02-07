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
/* function solution(participant, completion) {
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
console.log(solution(participant, completion)); */
// Q5. 두 개 뽑아서 더하기
/* function solution(numbers) {
    var answer = [];
    for(let i=0; i < numbers.length; i++) {
        for(let j=0; j < numbers.length; j++) {
            if(i !== j){
                let sol = numbers[i] + numbers[j];
                answer.push(sol);
            }
        }
    } const set = Array.from(new Set(answer));
    set.sort((a, b) => a - b);
    return set;
}
let numbers = [2,1,3,4,1];

console.log(solution(numbers)); */
//Q6. 2016년 요일 구하기
/* function solution(a, b) {
    var answer = '';
    const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dayMonth = 0;
    for (let i=0; i <= a - 1; i++) {
        if(a === 1) {
        } else {
            dayMonth += month[i];
        }
    }
    let day = dayMonth + b;
    if(day % 7 === 1) { 
        answer = "FRI";
    } else if (day % 7 === 2) {
        answer = "SAT"
    } else if (day % 7 === 3) {
        answer = "SUN"
    } else if (day % 7 === 4) {
        answer = "MON"
    } else if (day % 7 === 5) {
        answer = "TUE"
    } else if (day % 7 === 6) {
        answer = "WED"
    } else if (day % 7 === 0) {
        answer = "THU"
    }
    return answer;
}
console.log(solution(5, 24));
// Q7. 문자열을 정수로 바꾸기
function solution(s) {
    var answer = 0;
    answer = parseInt(s, 10);
    return answer;
} */

// 음양 더하기
/* function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0; i < absolutes.length; i++) {
        let sol = 0;
        if(signs[i] === true) {
            sol = parseInt(absolutes[i]);
        } else {
            sol = parseInt('-'+absolutes[i]);
        }
        answer += sol;
    }
    return answer;
}
const absolutes = [4, 7, 12];
const signs = [true, false, true];

console.log(solution(absolutes, signs)); */

//문자열 다루기 기본
/* function solution(s) {
    var answer = true;
    
for(let i=0; i < s.length; i++) {
    if( isNaN(s[i]) === true) {
        answer = false;
    } else if (s.length !== 4) {
        answer = false;
    }
}
    return answer;
}
const s = "1234"
console.log(s.length);
console.log(solution(s)); */


// 없는 숫자 더하기

/* function solution(numbers) {
    let answer = 0;
    for(let i=0; i < numb.length; i++) {
      if(numbers.indexOf(i) < 0) {
          answer += i;
          
      }
      }
      return answer;
    }

    const numbers = [2];
    const numb = [0,1,2,3,4,5,6,7,8,9];

console.log(solution('chulhw'));

solution(numbers); */

// 두 정수 사이의 합

/* function solution(a, b) {
    let answer = 0;
 if (a > b) {
        for(let i=b; i < a + 1; i++) {
            answer += i;
            } 
    } else if (b > a) {
        for(let j=a; j < b + 1; j++) {
            answer += j;
            }
    } else {
            answer = a;
    } 
    return answer;
}
console.log(solution(5,3)); */

// 약수의 합

/* function solution(n) {
    let answer = 0;
    for(let i=1; i <= n; i++) {
        if(n % i === 0) {
            answer += i;
        }
    }
    return answer;
} */

// 모의고사

/* function solution(answers) {
    const personA = [];
    const personB = [];
    const personC = [];
    
    let answerA = 0;
    let answerB = 0;
    let answerC = 0;
    
selectAnswer: for(let i=0; i <= 2000; i++){
                    personA.push(1,2,3,4,5);
                    personB.push(2,1,2,3,2,4,2,5);
                    personC.push(3,3,1,1,2,2,4,4,5,5);
                }
    
result: for(let i=0; i < answers.length; i++) {
                if(answers[i] === personA[i]) {
                    answerA += 1;
                }  
                if(answers[i] === personB[i]) {
                    answerB += 1;
                }
                if(answers[i] === personC[i]) {
                    answerC += 1;
                }
                }
    
 let answerObj = [{name : 1, point : answerA},
                  {name : 2, point : answerB},
                  {name : 3, point : answerC},
                 ]
 
 answerObj.sort( function(a,b) {
     return b.point - a.point;
 });
    
    if(answerA === answerB && answerB === answerC) {
        return [answerObj[0].name, answerObj[1].name, answerObj[2].name];
    } else if ( answerObj[0].point === answerObj[1].point) {
        return [answerObj[0].name, answerObj[1].name];
    } else {
        return [answerObj[0].name];
    }
} */

// 소수 만들기

/* function solution(nums) {
    let sum = 0;
    let sumArr = [];
    let answer = 0;
   
    for(let i=0; i < nums.length-2; i++) {
        for(let j=i+1; j < nums.length-1; j++) {
            for(let k=j+1; k < nums.length; k++){
                sum = nums[i] + nums[j] + nums[k];
                sumArr.push(sum);
            }
            }    
    } 
    primeNumb: for(let i=0; i < sumArr.length; i++) {
                    for(let j=2; j < sumArr[i]; j++) {
                        if(sumArr[i] % j === 0) {
                            continue primeNumb;
                        }
                    }
        answer += 1;
    }    
    return answer;
}
 */
// 소수 찾기

/* function solution(n) {
    let numbArr = Array(n+1).fill(true).fill(false, 0, 2);
    
    for(let i=2; i*i <= n; i++) {
        if(numbArr[i]) {
        for(let j=i*i; j <= n; j += i) {
            numbArr[j] = false;
        }
    }
    } return numbArr.filter(e => e).length;
} */

// 직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log(('*'.repeat(a)+'\n').repeat(b));
});

// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    let answer = [];
    let sum = 0;
    for(let i=0; i < n; i++) {
        sum += x;
        answer.push(sum);
    }
    return answer;
}

