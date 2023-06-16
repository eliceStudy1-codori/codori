/**
 * 문제 설명
 * 문자열 my_string이 매개변수로 주어집니다. 
 * my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 1 ≤ my_string의 길이 ≤ 1,000
 * 
 * 입출력 예
 * my_string	return
 * "jaron"	    "noraj"
 * "bread"	    "daerb"
 * 
 * @param {String} my_string 문자열
 * @returns 거꾸로 뒤집은 문자열
 */
function solution(my_string) {
    // 01. spread 문법을 사용하여 문자열을 배열로 변환한다.
    // 02. reverse 메서드를 사용하여 배열의 인덱스가 큰 순서대로 재정렬한다. (거꾸로 뒤집는다)
    // 03. join 메서드를 사용하여 문자열로 변환하여 반환한다.
    return [...my_string].reverse().join('');
}