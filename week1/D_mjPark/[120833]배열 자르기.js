/**
 * 프로그래머스 0레벨 문제 - 배열 자르기 (120833)
 * @param { Array } numbers 정수 배열
 * @param { Number } num1 첫 인덱스 위치
 * @param { Number } num2 마지막 인덱스 위치
 * @returns 정수 배열에서 인덱스 num1 부터 num2 까지 자른 정수 배열
 */

function solution(numbers, num1, num2) {
  // 1. 정수배열 중 num1 부터 num2 까지 배열을 잘라 반환
  return numbers.slice(num1, num2 + 1);
  //slice는 end가 미포함이기 때문에 포함하기 위해 +1
}
