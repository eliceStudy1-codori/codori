/**
 * 프로그래머스 0레벨 문제 - flag에 따라 다른 값 반환하기 (181933)
 * @param { Number } a 정수1
 * @param { Number } b 정수2
 * @param { Boolean } flag boolean값(true or false)
 * @returns flag가 true 일때 정수의 합, false 일때 정수의 차
 */

function solution(a, b, flag) {
  // 1. flag가 true인지 flase인지 확인
  return flag === true ? a + b : a - b;
}
