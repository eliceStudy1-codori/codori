/**
 * 프로그래머스 0레벨 문제 - 피자 나눠 먹기 (3) (120816)
 * @param { Number } slice 피자 한판을 자른 조각 수
 * @param { Number } n 먹는 사람의 수
 * @returns 1인 최소 한조각 이상 먹을 때 최소 피자의 개수
 */

function solution(slice, n) {
  // 1. 최소 한조각 이상 먹어야 하니 나머지가 있을때 반드시 한판을 추가(올림)
  return Math.ceil(n / slice);
  // 최소 한조각 이상 먹어야 하니 올림을 사용해야함 Math.ceil()
}
