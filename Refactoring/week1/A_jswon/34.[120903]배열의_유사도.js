/**
 * 문제 설명
 * 두 배열이 얼마나 유사한지 확인해보려고 합니다. 
 * 문자열 배열 s1과 s2가 주어질 때 
 * 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 1 ≤ s1, s2의 길이 ≤ 100
 * 1 ≤ s1, s2의 원소의 길이 ≤ 10
 * s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
 * s1과 s2는 각각 중복된 원소를 갖지 않습니다.
 * 
 * 입출력 예
 * s1	                    s2	                    result
 * ["a", "b", "c"]	["com", "b", "d", "p", "c"]	        2
 * ["n", "omg"]	    ["m", "dot"]	                    0
 * 
 * @param {Array} s1 문자열 배열1
 * @param {Array} s2 문자열 배열2
 * @returns 두 배열의 같은 원소의 개수
 */
function solution(s1, s2) {
    // 01. filter, includes 메서드를 사용하여 배열에 다른 배열의 요소가 존재하는지 여부를 확인하여 배열로 반환한다.
    // 02. 그리고 그 배열의 길이를 반환한다.
    return s1.filter(x => s2.includes(x)).length;
}