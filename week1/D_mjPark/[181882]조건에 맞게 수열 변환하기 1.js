/**
 * 프로그래머스 0레벨 문제 - 조건에 맞게 수열 변환하기 1 (181882)
 * @param { Array } arr정수가 담긴 배열
 * @returns 배열에 길이가 11이상이면 배열 원소의 합, 10이하면 배열의 원소의 곱
 */

function solution(arr) {
  return arr.map((x) =>
    x >= 50 && x % 2 == 0 ? x / 2 : x < 50 && x % 2 == 1 ? x * 2 : x
  );
}
