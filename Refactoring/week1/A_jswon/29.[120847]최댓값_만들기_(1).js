/**
 * 문제 설명
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 0 ≤ numbers의 원소 ≤ 10,000
 * 2 ≤ numbers의 길이 ≤ 100
 * 
 * 입출력 예
 * numbers	                result
 * [1, 2, 3, 4, 5]	          20
 * [0, 31, 24, 10, 1, 9]	 744
 * 
 * @param {Array} numbers 정수 배열
 * @returns 배열에서 원소 두 개를 곱한 값의 최댓값
 */
function solution(numbers) {
    // 01. 정수 배열을 내림차순 정렬하여 구조 분해 할당한다.
    // 이 때, 배열의 길이가 구조 분해 할당할 배열보다 길면
    // 해당 요소까지만 데이터가 할당된다.
    let [n1, n2] = numbers.sort((a,b) => b - a);
    // 02. 내림차순한 양의 정수 2개는 배열에서 큰 값이므로 두 수를 곱하여 반환한다.
    return n1 * n2;
}