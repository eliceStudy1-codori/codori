/**
 * 문제 설명
 * 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 
 * 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.
 * 
 * 제한사항
 * 1 ≤ n ≤ 1,000
 * 
 * 입출력 예
 * 입력 #1 -> 100
 * 출력 #1 -> 100 is even
 * 입력 #2 -> 1
 * 출력 #2 -> 1 is odd
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // 1. 숫자를 입력 받는다.
    n = Number(input[0]);
    // 2. 숫자를 2로 나누어 나머지가 0이면 짝수(even), 1이면 홀수(odd)를 반환한다.
    console.log(`${n} is ${n % 2 === 0 ? "even" : "odd"}`);
});