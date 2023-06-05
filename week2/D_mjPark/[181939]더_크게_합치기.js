/**
 * 프로그래머스 0레벨 문제 - 더 크게 합치기 (181939)
 * @param { Number } a 양의정수
 * @param { Number } b 양의정수
 * @returns "ab"가 "ba" 크거나 같으면 "ab"*1 , 작으면 "ba"*1
 */

function solution(a, b) {
  // 1. "a"와"b"를 형변환하여 "ab"와 "ba"를 구한다
  // 2. 값을 비교한다
  let aPlusB = (a + "" + (b + "")) * 1;
  let bPlusA = (b + "" + (a + "")) * 1;
  return aPlusB >= bPlusA ? aPlusB : bPlusA;

  // Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}
