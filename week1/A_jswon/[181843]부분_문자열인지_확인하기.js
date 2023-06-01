/**
 * my_string에 target이 포함되는지 여부를 반환한다.
 * @param {문자열} my_string 
 * @param {문자열에 포함되는 내용} target 
 * @returns 포함되었으면 1, 아니면 0을 반환
 */
function solution(my_string, target) {
    // 1. indexOf 함수를 사용하여 my_string에 target이 있는지 확인한다.
    // 해당 값이 -1보다 크면 my_string에서 시작하는 지점을 반환한다는 뜻이므로 존재하는 것이다.
    // 2. boolean 형식의 값을 묵시적으로 형변환한다.
    return +(my_string.indexOf(target) > -1);
}