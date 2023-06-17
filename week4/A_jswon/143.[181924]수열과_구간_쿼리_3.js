/**
 * 문제 설명
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
 * queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
 * 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
 * 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 1 ≤ arr의 길이 ≤ 1,000
 * 0 ≤ arr의 원소 ≤ 1,000,000
 * 1 ≤ queries의 길이 ≤ 1,000
 * 0 ≤ i < j < arr의 길이
 * 
 * 입출력 예
 * arr	                queries	                result
 * [0, 1, 2, 3, 4]	[[0, 3],[1, 2],[1, 4]]	[3, 4, 1, 0, 2]
 * 
 * @param {Array} arr 정수 배열
 * @param {Array} queries 2차원 정수 배열
 * @returns 규칙에 따라 queries를 처리한 이후의 arr
 */
function solution(arr, queries) {
    // 01. 2차원 정수 배열인 queries를 forEach 메서드를 통해 loop를 수행한다.
    // 02. 2차원 배열의 원소인 1차원 배열의 0번째 원소, 1번째 원소를 구조 분해 할당하여 서로의 위치를 바꾼다.
    queries.forEach(x => [arr[x[0]], arr[x[1]]] = [arr[x[1]], arr[x[0]]]);
    // 03. loop가 종료되면 정수 배열을 반환한다.
    return arr;
}