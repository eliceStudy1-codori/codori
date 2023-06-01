/**
 * 문자열 각 원소의 길이를 담은 배열을 반환한다.
 * @param {문자열 배열} strlist 
 * @returns 문자열 각 원소의 길이를 담은 배열
 */
function solution(strlist) {
    // 1. map을 사용하여 각 원소들을 각 원소들의 길이로 변환하여 반환한다.
    return strlist.map(x => x.length);
}