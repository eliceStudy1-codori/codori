/**
 * 문제 설명
 * 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 
 * return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항
 * 0 < n ≤ 1000
 * 
 * 입출력 예
 * n	result
 * 10	30
 * 4	6
 * 
 * @param {Number} n 정수 
 * @returns n 이하의 짝수의 합
 */
function solution(n) {
    // 01. 숫자의 합을 담을 변수 선언
    let sum = 0;
    // 02. for loop을 수행하여 짝수 값만 더하여 sum에 저장
    for(let i=2; i<=n; i+=2) sum += i;
    // 03. 숫자의 합 반환
    return sum;
}