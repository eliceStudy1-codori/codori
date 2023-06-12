/**
 * 문제 설명
 * i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
 * 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
 * 정수 n이 주어질 때 다음 조건을 만족하는 
 * 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
 * 조건 -> i! ≤ n
 * 
 * 제한사항
 * 0 < n ≤ 3,628,800
 * 
 * 입출력 예
 *     n	    result
 *  3628800	      10
 *     7	       3
 * 
 * @param {Number} n 정수 
 * @returns i! <=n 을 만족하는 가장 큰 정수 i
 */
function solution(n) {
    // 01. fatorial 함수를 호출하여 재귀 루프를 돌아 최종값을 반환한다.
    return factorial(n, 1, 1);
}

/**
 * fatorial 값을 구하기 위한 함수 선언
 * @param {Number} n 입력받은 정수 n
 * @param {Number} c i! 값
 * @param {Number} i i! <=n 조건을 만족하는 가장 큰 정수 i
 * @returns i! <=n 조건을 만족하는 가장 큰 정수
 */
function factorial(n, c, i) {
    // 02. n과 c(i!) 값이 같다면 i를 반환한다.
    if(n === c) {
        return i;
    }
    // 03. n보다 c가 더 크다면 i에서 1을 뺀 값을 반환한다.
    else if(n < c) {
        return i-1;
    }
    // 04. 두 조건에 해당하지 않는다면 다시 자기 자신을 호출한다.
    // 05. c 값에는 i 값을 증가한 값을 곱하여 다시 함수를 반환한다.
    return factorial(n, c * ++i, i);
}