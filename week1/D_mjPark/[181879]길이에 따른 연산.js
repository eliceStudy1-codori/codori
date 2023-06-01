/**
 * 프로그래머스 0레벨 문제 - 길이에 따른 연산 (181879)
 * @param { Array } num_list 정수가 담긴 배열
 * @returns 배열에 길이가 11이상이면 배열 원소의 합, 10이하면 배열의 원소의 곱
 */

function solution(num_list) {
  return num_list.length > 10
    ? num_list.reduce((acc, cur) => acc + cur)
    : num_list.reduce((acc, cur) => acc * cur);
}
