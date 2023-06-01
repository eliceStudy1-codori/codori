/**
 * 프로그래머스 0레벨 문제 - 중앙값 구하기 (120811)
 * @param { Array } array 길이가 홀수이며, 정수로 이루어진 배열
 * @returns 주어진 배열의 중앙 값
 */

function solution(array) {
  // 1. 배열을 오름차순으로 정렬한다
  // 2. 정렬한 배열 길이를 2로 나눈 몫만 남긴다.
  // 3. 해당하는 인덱스의 위치에 값을 return 한다.
  return array[Math.trunc(array.sort((a, b) => a - b).length / 2)];
  //trunc는 math.floor와 비슷하게 동작 = 소수점 이하를 전부 버림
  //floor는 내림 후 정수값 반환
}
