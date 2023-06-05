/**
 * 프로그래머스 0레벨 문제 - 대문자와 소문자 (120893)
 * @param { String } my_string 대소문자로 이루어진 문자열
 * @returns 소문자는 대문자로, 대문자는 소문자로 바꾼 문자열
 */

function solution(my_string) {
  // 1. 문자열을 배열로 반환 후 소문자는 대문자로, 대문자는 소문자로 바꾼 문자열
  return my_string
    .split("")
    .map((x) => (x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("");
}
