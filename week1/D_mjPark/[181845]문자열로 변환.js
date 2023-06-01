/**
 * 프로그래머스 0레벨 문제 - 문자열로 변환 (181845)
 * @param { Number } n 문자로 바꿀 숫자
 * @returns 숫자를 문자 타입 변환
 */

function solution(n) {
  // 1. 묵시적 타입변환을 사용하여 숫자를 문자열로 변환
  return n + "";

  // 명시적 타입 변환 => String(n);
}
