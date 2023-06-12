/**
 * 문제 설명
 * 정수 배열 arr와 2개의 구간이 담긴 배열 intervals가 주어집니다.
 * intervals는 항상 [[a1, b1], [a2, b2]]의 꼴로 주어지며 각 구간은 닫힌 구간입니다. 
 * 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다.
 * 이때 배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 
 * 앞뒤로 붙여 새로운 배열을 만들어 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 1 ≤ arr의 길이 ≤ 100,000
 * 1 ≤ arr의 원소 < 100
 * 1 ≤ a1 ≤ b1 < arr의 길이
 * 1 ≤ a2 ≤ b2 < arr의 길이
 * 
 * 입출력 예
 *      arr	             intervals	            result
 * [1, 2, 3, 4, 5]	[[1, 3], [0, 4]]	[2, 3, 4, 1, 2, 3, 4, 5]
 * 
 * @param {Array} arr 정수 배열
 * @param {Array} intervals 2개의 구간이 담긴 배열(2차원) 
 * @returns 구간에 해당하는 배열
 */
function solution(arr, intervals) {
    // 01. 2차원 배열을 구조할당 분해를 사용하여 변수에 저장한다.
    let [i1, i2] = intervals;
    // 02. 반환할 배열을 초기화한다.
    let answer = [];
    // 03. slice 메소드를 이용하여 정수 배열의 시작 인덱스부터 해당 인덱스까지의 요소들을 push 한다.
    // 이 때, slice 메소드의 2번째 요소는 종료 인덱스이고,
    // 종료 인덱스는 배열 값에 포함되지 않으므로 1을 더해준다.
    answer.push(arr.slice(i1[0], i1[1] + 1));
    answer.push(arr.slice(i2[0], i2[1] + 1));
    // 04. flat 메소드를 이용하여 배열 평탄화. 1차원 배열 반환
    // ex) [[1,2],[3,4]].flat() => [1,2,3,4]
    return answer.flat();
}
