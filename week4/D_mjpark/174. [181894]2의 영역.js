/**
 * 문제 설명
 * 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
 * 단, arr에 2가 없는 경우 [-1]을 return 합니다.
 *
 * 제한사항
 * 1 ≤ arr의 길이 ≤ 100,000
 * 1 ≤ arr의 원소 ≤ 10
 *
 * 입출력 예
 * arr	result
 * [1, 2, 1, 4, 5, 2, 9]	[2, 1, 4, 5, 2]
 * [1, 2, 1]	[2]
 * [1, 1, 1]	[-1]
 * [1, 2, 1, 2, 1, 10, 2, 1]	[2, 1, 2, 1, 10, 2]
 *
 * @param { Array } arr 숫자로 이루어진 배열
 * @returns  배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열
 */

function solution(arr) {
  // 1. 2의 모든 인덱스 위치 확인하여 가장 큰 값과 작은값 선언
  // 2. arr에 2가 포함되어 있지 않다면 -1을 반환
  // 3. arr에 2가 포함되어있다면 가장 작은 인덱스 위치부터 가장 큰 인덱스 위치(포함) 까지 반환
  let twoArr = arr
    .map((x, i) => (x === 2 ? (x = i) : "*"))
    .filter((x) => Number(x) || x === 0);
  let indexMax = Math.max(...twoArr);
  let indexMin = Math.min(...twoArr);
  return !arr.includes(2) ? [-1] : arr.slice(indexMin, indexMax + 1);
}
