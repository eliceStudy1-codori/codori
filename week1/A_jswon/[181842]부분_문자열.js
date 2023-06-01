/**
 * str2에 str1이 포함되는지 여부를 반환한다.
 * @param {문자열} str1 
 * @param {문자열에 포함되는 내용} str2 
 * @returns 포함되었으면 1, 아니면 0을 반환
 */
function solution(str1, str2) {
    // 1. includes 함수를 사용하여 str1이 str2에 포함되어있는지 확인한다.
    // 2. boolean 형식의 값을 묵시적으로 형변환한다.
    return +(str2.includes(str1));
}