/**
 * 문제 설명
 * 문자열 배열 strArr가 주어집니다. 
 * 모든 원소가 알파벳으로만 이루어져 있을 때, 
 * 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 
 * 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 
 * 반환하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 1 ≤ strArr ≤ 20
 * 1 ≤ strArr의 원소의 길이 ≤ 20
 * strArr의 원소는 알파벳으로 이루어진 문자열 입니다.
 *  
 * 입출력 예
 *        strArr	                     result
 * ["AAA","BBB","CCC","DDD"]	["aaa","BBB","ccc","DDD"]
 * ["aBc","AbC"]
 * 
 * @param {Array} strArr 문자열 배열
 * @returns 홀수번 째 원소는 대문자, 짝수번 째 원소는 소문자로 알파벳 문자열 변환된 배열
 */
function solution(strArr) {
    // 1. map 메소드를 이용하여 배열의 인덱스를 2로 나누어 나머지를 구한다. 0이면 짝수, 1이면 홀수.
    // 2. 짝수 번째 원소는 소문자로, 홀수 번째 원소는 대문자로 변환한다.
    return strArr.map((x, i) => i % 2 === 0 ? x.toLowerCase() : x.toUpperCase());
}