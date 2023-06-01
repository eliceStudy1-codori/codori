/**
 * 정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 반환한다.
 * @param {정수의 시작 값} start 
 * @param {정수의 끝 값} end 
 * @returns start부터 end까지의 숫자를 담은 배열
 */
function solution(start, end) {
    // 1. spread 연산자를 사용하여 배열에 자리를 만든다.
    // -> 값은 undefined로 채워진다.
    // 2. map 메서드를 사용하여 배열 값을 변경한다. 
    return [...Array(end-start+1)].map((value, index) => index + start);
}