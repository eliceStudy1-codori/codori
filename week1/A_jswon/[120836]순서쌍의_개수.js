/**
 * 두 숫자의 곱이 n인 자연수 순서쌍의 갯수를 반환한다.
 * @param {자연수} n 
 * @returns 두 숫자의 곱이 n인 자연수 순서쌍의 갯수
 */
function solution(n) {
    // 자연수 n의 순서쌍의 갯수 = 자연수 n의 약수의 갯수 이다.
    // 1. 배열을 선언한다.
    var answer = [];
    // 2. for문으로 자연수 n의 절반만큼 loop를 수행한다.
    // 절반만큼 수행하는 이유는 절반 이후의 숫자는 n의 약수가 될 수 없기 때문이다.
    for(let i=1; i<=n/2; i++) {
        // n을 i로 나누어 나머지가 0이면 해당 자연수의 약수이므로, 배열에 추가한다.
        if(n % i === 0) answer.push(i);
    }
    // n의 자기 자신도 n의 약수이므로 배열의 길이에 1을 더하여 반환한다.
    return answer.length+1;
}