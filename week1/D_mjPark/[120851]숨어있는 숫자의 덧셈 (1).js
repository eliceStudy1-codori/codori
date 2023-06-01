/**
 * 프로그래머스 0레벨 문제 - 숨어있는 숫자의 덧셈 (1) (120851)
 * @param { Number } num_list 정수가 담긴 배열
 * @param { Number } n 배열에 존재하는지 확인할 정수
 * @returns n이 num_list에 존재하면 1 , 존재하지 않으면 0
 */

function solution(my_string) {
  return my_string
    .split("")
    .filter((x) => x % 1 == 0)
    .map((x) => Number(x))
    .reduce((a, b) => a + b);
}
