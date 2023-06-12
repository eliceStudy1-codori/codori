/**
 * 문제 설명
 * 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * 0 < before의 길이 == after의 길이 < 1,000
 * before와 after는 모두 소문자로 이루어져 있습니다.
 *
 * 입출력 예
 * before	after	result
 * "olleh"	"hello"	1
 * "allpe"	"apple"	0
 *
 * @param { String } before 영어 소문자로 이루어진 문자열
 * @param { String } after 영어 소문자로 이루어진 문자열
 * @returns before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0
 */

function solution(before, after) {
  // 1. befor와 after를 배열로 나누어 정렬하고 합친 값이 동일한지 비교
  let sortBefor = before.split("").sort().join("");
  let sortAfter = after.split("").sort().join("");

  return sortBefor === sortAfter ? 1 : 0;
}
