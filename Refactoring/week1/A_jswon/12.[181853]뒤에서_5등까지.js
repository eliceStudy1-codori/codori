/**
 * 문제 설명
 * 정수로 이루어진 리스트 num_list가 주어집니다. 
 * num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 6 ≤ num_list의 길이 ≤ 30
 * 1 ≤ num_list의 원소 ≤ 100
 * 
 * 입출력 예
 * num_list	                        result
 * [12, 4, 15, 46, 38, 1, 14]	[1, 4, 12, 14, 15]
 * 
 * @param {Array} num_list 정수 배열
 * @returns 가장 작은 5개의 수를 오름차순으로 정렬한 배열
 */
function solution(num_list) {
    // 01. 입력받은 배열을 오름차순으로 정렬한다.
    // 02. slice 메서드를 사용하여 0번째 인덱스부터 4번째 인덱스까지의 수를 잘라서 반환한다.
    return num_list.sort((a,b) => a - b).slice(0, 5);
}