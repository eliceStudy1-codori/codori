/**
 * 프로그래머스 0레벨 문제 - 두 수의 나눗셈 (120806)
 * @param { Number } num1 정수1
 * @param { Number } num2 정수2
 * @returns 정수1을 정수2로 나눈 값에 1,000을 곱한 후 정수
 */

function solution(num1, num2) {
  // 1. 매개변수를 곱한다.
  return Math.floor((num1 / num2) * 1000);
}
