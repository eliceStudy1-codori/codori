/**
 * 문제 설명
 * 정수 n과 k가 주어졌을 때, 
 * 1 이상 n이하의 정수 중에서 k의 배수를 
 * 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 1 ≤ n ≤ 1,000,000
 * 1 ≤ k ≤ min(1,000, n)
 * 
 * 입출력 예
 * n	k	result
 * 10	3	[3, 6, 9]
 * 15	5	[5, 10, 15]
 * 
 * @param {Number} n 정수
 * @param {Number} k 정수
 * @returns n까지의 k의 배수를 오름차순으로 정렬한 배열
 */ 
function solution(n, k) {
    // 1. n을 k로 나눈 만큼 배열을 초기화한다. 이 때 값은 undefined가 채워진다.
    // 2. map 메소드를 이용하여 요소별 값을 변경한다.
    // 3. 반환한다.
    return  [...Array(Math.floor(n/k))].map((value, index) => (index+1) * k);
}