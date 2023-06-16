/**
 * 문제 설명
 * 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
 * 문자열 my_string이 매개변수로 주어질 때 
 * 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * my_string은 소문자와 공백으로 이루어져 있습니다.
 * 1 ≤ my_string의 길이 ≤ 1,000
 * 
 * 입출력 예
 * my_string	            result
 * "bus"	                 "bs"
 * "nice to meet you"	  "nc t mt y"
 * 
 * @param {String} my_string 알파벳 문자열
 * @returns 모음 알파벳을 제거한 문자열
 */
function solution(my_string) {
    // 01. 정규 표현식을 사용하여 모음 알파벳인 a,e,i,o,u를 replace 메서드를 사용하여 공백으로 교체한다. 이후 반환한다.
    return my_string.replace(/[a,e,i,o,u]/g, "");
}