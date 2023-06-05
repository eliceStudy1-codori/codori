/**
 * 프로그래머스 0레벨 문제 - 수 조작하기1 (181926)
 * @param { Number } n control에 원소에 따라 바뀔 정수
 * @param { Number } control "w" "a" "s" "d"만 존재하는 문자열
 * @returns control원소에 따라 값이 바뀌는 n
 */

function solution(n, control) {
  // 1. control길이만큼 control에 원소에 따라 n의 값을 바꿈
  for (let i = 0; i < control.length; i++) {
    switch (control[i]) {
      case "w":
        n += 1;
        break;
      case "s":
        n -= 1;
        break;
      case "d":
        n += 10;
        break;
      case "a":
        n -= 10;
        break;
    }
  }
  return n;
}
