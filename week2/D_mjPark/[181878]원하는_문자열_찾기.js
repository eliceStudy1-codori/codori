/**
 * 프로그래머스 0레벨 문제 - 원하는 문자열 찾기 (181878)
 * @param { String } myString 영어대소문자로 이루어진 문자열
 * @param { String } pat 영어대소문자로 이루어진 문자열
 * @returns myString에 pat이 존재하면 1, 아니면 0
 */

function solution(myString, pat) {
  // 1. 주어진 두 문자열을 비교하기위해 전부 소문자로 변환
  // 2. 소문자로 변환한 myString에 소문자로 변환한 pat 문자열이 존재하면 1, 아니면 0 반환
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}
