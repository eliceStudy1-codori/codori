/**
 * 프로그래머스 0레벨 문제 - 배열 유사도 (120903)
 * @param { Array } s1 문자열 배열
 * @param { Array } s2 문자열 배열
 * @param { Array } result s1에 원소가 s2에 원소에 포함되는 원소만 담은 배열
 * @returns s1과 s2에서 같은 원소의 개수
 */

function solution(s1, s2) {
  // 1. s1의 원소가 s2에 원소에 포함되는지 확인하고 배열로 반환
  let result = s1.filter((x) => s2.includes(x));

  return result.length;
}
