/**
 * 프로그래머스 0레벨 문제 - 이어 붙인 수 (181898)
 * @param { Array } num_list 정수가 담긴 리스트
 * @returns num_list 원소 중 홀수만 이어붙인 수 와 짝수만 이어붙인 수의 합
 */

function solution(num_list) {
  let a = "";
  let b = "";

  // 1. num_list에 원소가 짝수라면 b에 문자열로 더하고, 홀수라면 a에 문자열로 더한다
  // 2. a와 b를 숫자로 형변환 후 더한다
  num_list.forEach((x) => (x % 2 === 0 ? (b += x) : (a += x)));
  return a * 1 + b * 1;
}
