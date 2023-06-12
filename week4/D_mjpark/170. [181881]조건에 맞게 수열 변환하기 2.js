/**
 * 문제 설명
 * 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.
 * 이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다. 이러한 x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.
 * 단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.
 *
 * 제한사항
 * 1 ≤ arr의 길이 ≤ 1,000,000
 * 1 ≤ arr의 원소의 값 ≤ 100
 *
 * 입출력 예
 * arr	result
 * [1, 2, 3, 100, 99, 98]	5
 *
 * @param { Array } arr 숫자로 이루어진 배열
 * @returns x번 반복한 결과인 배열 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재할 때 x 중 가장 작은 값
 */

function solution(arr) {
  // 1. arr와 arr1을 조건에 맞게 새로운 배열로 변경
  // 2. 바뀔때마다 카운트하기
  // 3. 최종적으로 arr와 arr1이 전부 같을때 for문을 멈추고 count된 값 반환
  let count = 0;
  let arr1 = [...arr].map((x) =>
    x >= 50 && x % 2 === 0 ? x / 2 : x < 50 && x % 2 !== 0 ? x * 2 + 1 : x
  );

  for (let i = 0; i < arr.length; i++) {
    if (JSON.stringify(arr) === JSON.stringify(arr1)) {
      break;
    } else {
      arr = arr.map((x) =>
        x >= 50 && x % 2 === 0 ? x / 2 : x < 50 && x % 2 !== 0 ? x * 2 + 1 : x
      );
      arr1 = arr1.map((x) =>
        x >= 50 && x % 2 === 0 ? x / 2 : x < 50 && x % 2 !== 0 ? x * 2 + 1 : x
      );
      count += 1;
    }
  }
  return count;
}
