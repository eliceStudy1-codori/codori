
/**
 * 문제 설명
 * 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
 * my_string에서 인덱스 num1과 인덱스 num2에 해당하는 
 * 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 * 1 < my_string의 길이 < 100
 * 0 ≤ num1, num2 < my_string의 길이
 * my_string은 소문자로 이루어져 있습니다.
 * num1 ≠ num2
 * 
 * 입출력 예
 * my_string	num1	num2	result
 * "hello"	     1	     2	    "hlelo"
 * "I love you"	 3	     6	   "I l veoyou"
 * 
 * @param {String} my_string 입력 문자열
 * @param {Number} num1 인덱스 값
 * @param {Number} num2 인덱스 값
 * @returns num1 인덱스 위치의 문자와 num2 인덱스 위치의 문자를 바꾼 입력 문자열
 */
function solution(my_string, num1, num2) {
    // 01. 입력 문자열을 배열로 변환하여 answer 변수에 담는다.
    let answer = my_string.split('');
    // 02. answer 문자열의 인덱스에 해당하는 요소를 바꾼다.
    answer[num1] = my_string.charAt(num2);
    answer[num2] = my_string.charAt(num1);
    // 03. join 메소드를 이용하여 문자열로 반환한다.
    return answer.join('');
}