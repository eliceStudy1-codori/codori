/**
 * 문제 설명
 * 정수 number와 n, m이 주어집니다. 
 * number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 10 ≤ number ≤ 100
 * 2 ≤ n, m < 10
 * 
 * 입출력 예
 * number	n	m	result
 * 60	    2	3	  1
 * 55	    10	5	  0
 * 
 * @param {Number} number 
 * @param {Number} n 
 * @param {Number} m 
 * @returns 공배수인지에 대한 여부
 */
function solution(number, n, m) {
    // 01. number에 n을 나누었을 때 나누어 떨어지는 지와
    //     number에 m을 나누었을 때 나누어 떨어지는 지를 확인하여
    //     둘 다 충족할 경우 1, 아니면 0을 반환한다. (암시적 형변환)
    return +(number % n === 0 && number % m === 0);
}