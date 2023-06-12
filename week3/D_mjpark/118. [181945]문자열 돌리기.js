/**
 * 문제 설명
 * 문자열 str이 주어집니다.
 * 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
 *
 * 제한사항
 * 1 ≤ str의 길이 ≤ 10
 *
 * 입출력 예
 * 입력 #1
 * abcde
 *
 * 출력 #1
 * a
 * b
 * c
 * d
 * e
 *
 * @param { String } str 영어로 이루어진 문자열
 * @returns 문자열을 시계방향으로 90도 돌려서 한줄에 원소 하나씩 출력
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  console.log(input.split("").join("\n"));
});
