/**
 * 문제 설명
 * 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * 2 < numbers의 길이 < 100
 * 0 < k < 1,000
 * numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
 * numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.
 *
 * 입출력 예
 * numbers	k	result
 * [1, 2, 3, 4]	2	3
 * [1, 2, 3, 4, 5, 6]	5	3
 * [1, 2, 3]	3	2
 *
 * @param { Array } numbers 숫자로 이루어진 배열
 * @param { Number } k 숫자
 * @returns k번째로 공을 던지는 사람의 번호
 */

function solution(numbers, k) {
  return numbers[(2 * (k - 1)) % numbers.length];

  // 시도1 : 0+2 = index2가 받음
  // 시도2 : 2+2 = index4 없으면 index0부터 +남은값
  // 시도3 : 2+2+2 = index6 없으면 index0부터 +남은값 + 남은값
  // 시도n = k : 2씩 증가
  // k가 1씩 증가할때 마다 -> index는 2씩증가
  // 공던지는 사람은 2*(k-1)이다
}
