/**
 * 문제 설명
 * 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, 
 * array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 * 1 ≤ array의 길이 ≤ 100
 * 0 ≤ array의 원소 ≤ 1,000
 * 0 ≤ n ≤ 1,000
 * 
 * 입출력 예
 * array	            n	result
 * [1, 1, 2, 3, 4, 5]	1	  2
 * [0, 2, 3, 4]	        1	  0
 * 
 * @param {Array} array 정수 배열
 * @param {Number} n    정수
 * @returns 정수 배열에 정수가 몇 개 들었는지에 대한 개수
 */
function solution(array, n) {
    // 01. filter 메소드를 사용하여 array에 n과 같은 요소만 배열로 반환한다.
    // 02. 그 배열의 길이를 반환한다.
    return array.filter(x => x === n).length;
}