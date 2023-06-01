/**
 * 정수 배열 각 원소의 2배한 원소 배열을 반환한다.
 * @param {정수가 들어있는 배열} numbers 
 * @returns 정수 배열 각 원소의 2배한 원소 배열
 */
function solution(numbers) {
    // 1. map을 사용하여 각 원소에 2배를 한 배열을 반환한다.
    return numbers.map(x => x*2);
}