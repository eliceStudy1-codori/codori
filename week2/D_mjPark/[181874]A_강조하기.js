/**
 * 프로그래머스 0레벨 문제 - A 강조하기 (181874)
 * @param { String } myString 대소문자가 섞인 문자열
 * @returns myString에서 "a"는 대문자로, 나머지는 소문자로 바꾼 문자열
 */

function solution(myString) {
  // 1. 각 원소를 배열로 나누어 각 조건에 맞게 변환한 후 문자열로 반환
  return myString
    .split("")
    .map((x) => (x === "a" || x === "A" ? "A" : x.toLowerCase()))
    .join("");
}
