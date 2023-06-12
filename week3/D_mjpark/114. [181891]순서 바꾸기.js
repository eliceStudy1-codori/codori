/**
 * 문제 설명
 * 정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 2 ≤ num_list의 길이 ≤ 30
 * 1 ≤ num_list의 원소 ≤ 9
 * 1 ≤ n ≤ num_list의 길이
 *
 * 입출력 예
 * num_list	n	result
 * [2, 1, 6]	1	[1, 6, 2]
 * [5, 2, 1, 7, 5]	3	[7, 5, 5, 2, 1]
 *
 * @param { Array } num_list 숫자로 이루어진 배열
 * @param { Number } n 주어진 배열에 원소를 앞뒤로 나눌 기준 인덱스
 * @returns num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트
 */

function solution(num_list, n) {
  // 1. n을 기준으로 끝까지 배열 자르기
  // 2. 0부터 n까지 배열 자르기
  // 3. 배열로 합쳐서 배열로 반환
  let arr1 = num_list.slice(n);
  let arr2 = num_list.slice(0, n);

  return arr1.concat(arr2);
}
