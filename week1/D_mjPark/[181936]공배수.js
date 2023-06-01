/**
 * 프로그래머스 0레벨 문제 - 공배수 (181936)
 * @param { Number } number n과 m이 공배수를 갖고 있는지 확인할 정수
 * @param { Number } n number의 배수인지 확인할 변수1
 * @param { Number } m number의 배수인지 확인할 변수2
 * @returns 공배수가 존재한다면 1, 아니면 0
 */

function solution(number, n, m) {
  // 1. number을 n 과 m으로 나눌때 둘다 나머지가 0인지 확인
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
