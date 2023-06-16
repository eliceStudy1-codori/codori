/**
 * 문제 설명
 * 정수가 담긴 리스트 num_list가 주어질 때, 
 * num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 * 1 ≤ num_list의 길이 ≤ 100
 * 0 ≤ num_list의 원소 ≤ 1,000
 * 
 * 입출력 예
 * num_list	            result
 * [1, 2, 3, 4, 5]	    [2, 3]
 * [1, 3, 5, 7]	        [0, 4]
 * 
 * @param {Array} num_list 정수 배열
 * @returns 배열의 짝수, 홀수 개수를 담은 배열
 */
function solution(num_list) {
    // 01. filter 메서드를 사용하여 홀수 원소 배열을 반환하고, 길이를 구한다.
    let odd = num_list.filter(x => x % 2 == 1).length;
    // 02. filter 메서드를 사용하여 짝수 원소 배열을 반환하고, 길이를 구한다.
    let even = num_list.filter(x => x % 2 == 0).length;
    // 03. 배열 형태로 반환한다.
    return [even, odd];
}