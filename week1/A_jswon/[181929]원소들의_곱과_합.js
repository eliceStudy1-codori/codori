/**
 * 프로그래머스 0레벨 문제 - 원소들의 곱과 합 (181929)
 * @param { 정수가 담긴 리스트 } num_list 
 * @returns 원소들의 곱이 원소들의 합의 제곱보다 작으면 1, 크면 0
 */
function solution(num_list) {
    // 1. 모든 원소들의 곱을 구한다.
    var mul = num_list.reduce(function multiply(mul, curVal) { return mul * curVal });
    // 2. 모든 원소들의 합을 구한다.
    var sum = num_list.reduce(function sum(sum, curVal) { return sum + curVal });
    // 3. 곱과 합의 제곱을 비교하여 숫자를 반환한다.
    // boolean 형식의 값을 묵시적으로 형변환한다.
    return +(mul < Math.pow(sum, 2));
}
