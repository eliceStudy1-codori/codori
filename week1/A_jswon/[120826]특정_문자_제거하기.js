/**
 * my_string에서 letter을 제거한 문자열을 반환한다.
 * @param {문자열} my_string 
 * @param {문자} letter 
 * @returns my_string에서 letter을 제거한 문자열 (string)
 */
function solution(my_string, letter) {
    // 1. 문자열을 split을 사용하여 배열로 변환한다.
    // 2. 배열의 method인 filter를 사용하여 해당 문자가 포함되지 않은 요소만 걸러낸다.
    // 3. 배열의 method인 join을 사용하여 문자열로 변환한다.
    return my_string.split('').filter(x => x !== letter).join('');
}