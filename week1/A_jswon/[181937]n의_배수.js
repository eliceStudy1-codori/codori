/**
 * 정수 num이 정수 n의 배수이면 1을, 아니면 0을 리턴한다.
 * @param {정수1} num 
 * @param {정수2} n 
 * @returns num이 n의 배수이면 1, 아니면 0
 */
function solution(num, n) {
    // 1. num을 n으로 나눈 나머지가 0이면 true, 아니면 false
    // 2. boolean 형식의 값을 묵시적으로 형변환한다.
    return +(num % n === 0);
}