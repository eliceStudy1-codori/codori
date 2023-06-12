/**
 * 문제 설명
 * 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 *
 * 제한사항
 * 1 ≤ myString의 길이 ≤ 100,000
 * myString은 알파벳 소문자로 이루어진 문자열입니다.
 *
 * 입출력 예
 * myString	result
 * "oxooxoxxox"	[1, 2, 1, 0, 1, 0]
 * "xabcxdefxghi"	[0, 3, 3, 3]
 *
 * @param { String } myString 알파벳 소문자로 이루어진 문자열
 * @returns myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열
 */

function solution(arr, delete_list) {
  // 1. arr 배열에서 delete_list 배열에 해당하는 원소를 제외한 배열로 반환
  return arr.filter((x) => !delete_list.includes(x));
}
