/**
 * 정수 n의 각자리 숫자의 합을 반환한다.
 * @param {정수} n 
 * @returns 정수 n의 각자리 숫자의 합
 */
function solution(n) {
    // 1. 정수 n을 문자열로 변환한다.
    // 2. 그것을 split을 사용하여 배열로 변환한다.
    // 3. map을 사용하여 배열에 있는 문자들을 숫자형으로 묵시적 형변환한다.
    // 4. reduce를 사용하여 배열의 합을 구한다.
    return n.toString().split('').map(x => +x).reduce(function add(sum, curVal) {
      return sum + curVal;
    }, 0);
}