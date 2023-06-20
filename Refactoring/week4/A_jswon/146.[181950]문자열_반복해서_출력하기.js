/**
 * 문제 설명
 * 문자열 str과 정수 n이 주어집니다.
 * str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
 * 
 * 제한사항
 * 1 ≤ str의 길이 ≤ 10
 * 1 ≤ n ≤ 5
 * 
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
    str = input[0];
    n = Number(input[1]);
    // 01. repeat 메서드를 사용하여 문자열을 반복하여 만들고 출력한다.
    console.log(str.repeat(n));
});