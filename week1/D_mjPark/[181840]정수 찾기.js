/**
 * 프로그래머스 0레벨 문제 - 정수 찾기 (181840)
 * @param { Number } num_list 정수가 담긴 배열
 * @param { Number } n 배열에 존재하는지 확인할 정수
 * @returns n이 num_list에 존재하면 1 , 존재하지 않으면 0
 */

function solution(num_list, n) {
  // 1. 정수가 배열에 포함되는지 확인
  return num_list.includes(n) ? 1 : 0;
}
