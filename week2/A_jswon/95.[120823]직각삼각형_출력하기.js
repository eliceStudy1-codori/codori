/**
 * 문제 설명
 * "*"의 높이와 너비를 1이라고 했을 때, 
 * "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 
 * 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
 * 
 * 제한사항
 * 1 ≤ n ≤ 10
 * 
 * 입출력 예
 * 입력 #1 -> 3
 * 출력 #1 ->
 * *
 * **
 * ***
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
    // 1. 결과값을 보여줄 배열 초기화
    let arr = [];
    // 2. 입력받은 숫자값까지 반복을 해야 한다.
    // 3. repeat 메소드를 사용하여 1부터 입력값까지 반복하여 배열에 추가한다.
    // 4. ex) 입력값이 3일때 arr = ["*", "**", "**"]
    for(let i=1; i<=Number(input[0]); i++) {
        arr.push('*'.repeat(i));
    }
    // 5. join 메소드를 이용해 개행하여 문자열로 변환한다.
    console.log(arr.join('\n'));
}); 