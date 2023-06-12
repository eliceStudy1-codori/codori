/**
 * 문제 설명
 * boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
 * (x1 ∨ x2) ∧ (x3 ∨ x4)
 *
 * 입출력 예
 * x1	x2	x3	x4	result
 * false	true	true	true	true
 * true	false	false	false	false
 *
 * ∨과 ∧의 진리표는 다음과 같습니다.
 * x	y	x ∨ y	x ∧ y
 * T	T	  T	  T
 * T	F	  T	  F
 * F	T	  T	  F
 * F	F 	F	  F
 *
 * @param { Boolean } x1 true / false
 * @param { Boolean } x2 true / false
 * @param { Boolean } x3 true / false
 * @param { Boolean } x4 true / false
 * @returns 다음의 식에 맞는 true / false 반환
 */

function solution(x1, x2, x3, x4) {
  // 1. x ∨ y	는 OR 연산자
  // 2. x ∧ y 는 AND 연산자
  // 3. 각 식의 맞게 대입
  return (x1 || x2) && (x3 || x4);
}
