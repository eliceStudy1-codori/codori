/**
 * 문제 설명
 * 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, 
 * my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한사항
 * my_string은 영소문자와 공백으로만 이루어져 있습니다.
 * 1 ≤ my_string의 길이 ≤ 1,000
 * my_string의 맨 앞과 맨 뒤에도 공백이 있을 수 있습니다.
 * my_string에는 단어가 하나 이상 존재합니다.
 * 
 * 입출력 예
 * my_string	                result
 * " i    love  you"	   ["i", "love", "you"]
 * "    programmers  "	   ["programmers"]
 * @param {String} my_string 단어가 공백 한 개 이상으로 구분되어 있는 문자열
 * @returns 공백값을 전부 제거한 문자열을 단어로 나누어 배열로 반환
 */ 
function solution(my_string) {
    // 1. 양옆 공백을 trim 메소드를 이용하여 먼저 제거한다.
    // 2. split을 사용하여 공백 단위로 나누어 배열을 만든다.
    // 3. filter 메소드를 사용하여 공백 문자열을 제거한 후 반환한다.
    return my_string.trim()
                    .split(' ')
                    .filter(x => x.length > 0)
}