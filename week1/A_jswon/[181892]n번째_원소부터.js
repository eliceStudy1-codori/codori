/**
 * 정수 배열 num_list의 정수 n번째 원소부터 마지막 원소까지의 모든 원소를 담은 배열을 반환
 * @param {정수 배열} num_list 
 * @param {정수} n 
 * @returns 
 */
function solution(num_list, n) {
    // 1. 배열의 시작은 index 0부터 시작하기 때문에, slice 메서드에 -1을 가한다.
    return num_list.slice(n-1);
}