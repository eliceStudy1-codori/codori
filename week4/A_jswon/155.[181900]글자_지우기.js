/**
 * 문제 설명
 * 문자열 my_string과 정수 배열 indices가 주어질 때, 
 * my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 
 * 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한사항
 * 1 ≤ indices의 길이 < my_string의 길이 ≤ 100
 * my_string은 영소문자로만 이루어져 있습니다
 * 0 ≤ indices의 원소 < my_string의 길이
 * indices의 원소는 모두 서로 다릅니다.
 * 
 * 입출력 예
 * my_string	                indices	                        result
 * "apporoograpemmemprs"	[1, 16, 6, 15, 0, 10, 11, 3]	"programmers"
 * 
 * @param {String} my_string 문자열
 * @param {Array} indices 정수 배열
 * @returns 정수 배열에 해당하는 인덱스의 요소를 지운 문자열
 */
function solution(my_string, indices) {
    // 01. 문자열을 배열로 변환한다.
    // 02. map 메서드를 사용하여 indices 배열에 해당하는 인덱스의 경우 빈 문자열로 변환하고,
    //     그렇지 않을 경우 해당 문자 그대로 변환한다.
    // 03. join 메서드를 사용하여 문자열로 변환 후 반환한다.
    return [...my_string].map((x, i) => indices.includes(i) ? "" : x).join('');
}