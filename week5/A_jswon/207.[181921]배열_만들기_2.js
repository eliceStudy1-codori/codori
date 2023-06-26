/**
 * 문제 설명
 * 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 
 * 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 
 * return 하는 solution 함수를 완성해 주세요.
 * 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
 * 
 * 제한사항
 * 1 ≤ l ≤ r ≤ 1,000,000
 * 
 * 입출력 예
 * l	r	    result
 * 5	555	    [5, 50, 55, 500, 505, 550, 555]
 * 10	20	    [-1]
 * 
 * @param {Number} l 시작 정수
 * @param {Number} r 종료 정수
 * @returns 숫자 0과 5로만 이루어진 모든 정수를 담은 배열
 */
function solution(l, r) {
    // 01. 빈 배열 선언
    let result = [];
    // 02. for loop 수행하여 값을 l부터 1씩 증가시킨다.
    for (let i = l; i <=r; i++) {
        // 03. 값이 숫자 0과 5로만 이루어져 있을 경우 배열에 추가한다.
        if (!(i+"").match(/[^50]+/)) result.push(i)
    }
    // 04. 배열의 길이가 1 이상이라면 배열을 반환하고 그렇지 않으면 [-1]을 반환한다.
    return result.length ? result : [-1];
}