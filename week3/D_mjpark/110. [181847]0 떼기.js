/**
 * 문제 설명
 * 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 2 ≤ n_str ≤ 10
 * n_str이 "0"으로만 이루어진 경우는 없습니다.
 *
 * 입출력 예
 * n_str	result
 * "0010"	"10"
 * "854020"	"854020"
 *
 * @param { Array } n_str 0을 포함한 숫자로 이루어진 문자열
 * @returns n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열
 */

function solution(n_str) {
  //1. 문자열을 배열로 나누어 0이 있다면 결과에서 해당 인덱스 빼기
  let arr = n_str.split("");
  let result = n_str;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "0") {
      break;
    } else {
      result -= arr[i];
    }
  }
  return result + "";

  // return String(Number(n_str));
}
