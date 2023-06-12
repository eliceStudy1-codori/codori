/**
 * 문제 설명
 * 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * return 값은 이진수를 의미하는 문자열입니다.
 * 1 ≤ bin1, bin2의 길이 ≤ 10
 * bin1과 bin2는 0과 1로만 이루어져 있습니다.
 * bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.
 *
 * 입출력 예
 * bin1	bin2	result
 * "10"	"11"	"101"
 * "1001"	"1111"	"11000"
 *
 * @param { Stirng } bin1 이진수를 의미하는 1과 0으로 이루어진 문자열
 * @param { Stirng } bin1 이진수를 의미하는 1과 0으로 이루어진 문자열
 * @returns 두 이진수의 합
 */

function solution(bin1, bin2) {
  // 1. 이진수를 의미하는 문자열을 정수로 더해서 이진수로 반환
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
