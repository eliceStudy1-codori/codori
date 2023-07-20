/**
 * 문제 설명
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때,
 * my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 * 2 ≤ my_string 길이 ≤ 5
 * 2 ≤ n ≤ 10
 * "my_string"은 영어 대소문자로 이루어져 있습니다.
 * 
 * 입출력 예
 * my_string	n	result
 * "hello"	    3	"hhheeellllllooo"
 * 
 * @param {String} my_string 입력한 문자열 
 * @param {Number} n 몇 번 씩 반복할 것인지에 대한 숫자
 * @returns 반복된 문자가 들어있는 문자열
 */
function solution(my_string, n) {
    // 01. split 함수를 사용하여 문자를 각각 한 문자씩 배열로 만든다.
    // 02. map 함수와 repeat 함수를 사용하여 각 배열 원소들을 반복하여 변환한다.
    // 03. 변환된 배열을 join 함수를 사용하여 다시 문자열로 변환 후, 반환한다.
    return my_string.split('').map(x => x.repeat(n)).join('');
}