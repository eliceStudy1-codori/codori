/**
 * 문제 설명
 * 다음과 같이 출력하도록 코드를 작성해 주세요.
 * 
 * 출력 예시
 * !@#$%^&*(\'"<>?:;
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    // 01. 작은따옴표('), 큰따옴표(")를 문자로 표시하려면 앞에 빽슬래시(\)를 붙여주어야 한다.
    console.log(`!@#$%^&*(\\'\"<>?:;`);
});