/**
 * 문제 설명
 * 정수 배열 arr와 자연수 k가 주어집니다.
 * 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, 
 * k가 짝수라면 arr의 모든 원소에 k를 더합니다.
 * 이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 1 ≤ arr의 길이 ≤ 1,000,000
 * 1 ≤ arr의 원소의 값 ≤ 100
 * 1 ≤ k ≤ 100
 * 
 * 입출력 예
 * arr	                    k	    result
 * [1, 2, 3, 100, 99, 98]	3	[3, 6, 9, 300, 297, 294]
 * [1, 2, 3, 100, 99, 98]	2	[3, 4, 5, 102, 101, 100]
 * 
 * @param {Array} arr 정수 배열
 * @param {Number} k 자연수
 * @returns 조건에 맞는 배열
 */
function solution(arr, k) {
    // 01. map 메서드를 사용한다.
    // 02. k가 홀수면 k를 곱한 배열을, k가 짝수면 k를 더한 배열을 반환한다.
    return k % 2 == 1 ?
            arr.map(x => x * k)
            : arr.map(x => x + k);
}