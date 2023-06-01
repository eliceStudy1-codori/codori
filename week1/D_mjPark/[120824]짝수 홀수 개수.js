/**
 * 프로그래머스 0레벨 문제 - 짝수 홀수 개수 (120824)
 * @param { Array } num_list 정수가 담긴 배열
 * @param { Array } odd 홀수만 담을 배열
 * @param { Array } eve 짝수만 담을 배열
 * @returns 홀수와 짝수의 개수를 담은 배열
 */

function solution(num_list) {
  // 1. 홀수와 짝수만 담을 배열을 선언및 초기화
  let odd = [];
  let eve = [];

  // 2. num_list에 모든 요소를 짝수인지 하나씩 판별하여 각각 배열에 담기
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 == 0 ? eve.push(num_list[i]) : odd.push(num_list[i]);
  }

  return [eve.length, odd.length];
}
