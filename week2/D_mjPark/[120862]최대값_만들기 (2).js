/**
 * 프로그래머스 0레벨 문제 - 최대값 만들기 (2) (120862)
 * @param { String } my_string 대소문자로 이루어진 문자열
 * @returns 소문자는 대문자로, 대문자는 소문자로 바꾼 문자열
 */

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}
