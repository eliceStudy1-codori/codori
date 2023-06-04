/**
 * 문제 설명
 * 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 
 * 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 3 ≤ num_str ≤ 100
 * 
 * 입출력 예
 *   num_str	result
 * "123456789"	  45
 * "1000000"	  1
 * 
 * @param {String} num_str 한 자리 정수로 이루어진 문자열
 * @returns 문자열 각 자리수의 합 
 */
function solution(num_str) {
    // 1. spread 연산자를 사용하여 정수 문자열을 한 자리씩 나누어 배열로 변환
    // 2. 정수가 문자형으로 바뀌기 때문에 map 메소드를 사용하여 정수형으로 묵시적 형변환
    // 3. reduce 메소드를 사용하여 전체 합을 구하여 반환한다.
    return [...num_str].map(x => +x).reduce((acc, cur) => acc+cur);
}