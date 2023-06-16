/**
 * 문제 설명
 * 정수로 이루어진 리스트 num_list가 주어집니다. 
 * num_list에서 가장 작은 5개의 수를 제외한 수들을 
 * 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 6 ≤ num_list의 길이 ≤ 30
 * 1 ≤ num_list의 원소 ≤ 100
 * 
 * 입출력 예
 * num_list	                                        result
 * [12, 4, 15, 46, 38, 1, 14, 56, 32, 10]	[15, 32, 38, 46, 56]
 * 
 * @param {Array} num_list 정수 배열
 * @returns num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순 정렬한 배열
 * 
 */
function solution(num_list) {
    // 01. 배열을 오름차순 정렬 후, 5번쨰 인덱스 이후의 요소들을 잘라 배열로 반환한다.
    return num_list.sort((a,b) => a - b).slice(5);
}