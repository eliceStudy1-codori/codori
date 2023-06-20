/**
 * 문제 설명
 * 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 * 
 * 
 * @param {Array} num_list 
 * @param {Number} n 
 * @returns 
 */
function solution(num_list, n) {
    // 01. 첫 번째 인덱스부터 n번째 인덱스까지 배열을 잘라서 반환한다.
    return num_list.slice(0, n);
}