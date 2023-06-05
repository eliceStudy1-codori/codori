/**
 * 프로그래머스 0레벨 문제 - 특정한 문자를 대문자로 바꾸기 (181873)
 * @param { String } my_string 영소문자로 이루어진 문자열
 * @param { String } alp 영소문자 1글자로 이루어진 문자
 * @returns my_stirng 원소 중 alp가 존재하면 해당 문자만 대문자로 변환한 문자열 출력
 */

function solution(my_string, alp) {
  // 1.my_string을 배열로 변환 후 원소중 alp와 같은 값이 존재하면 대문자로 바꾸고 문자열로 합침
  return my_string
    .split("")
    .map((x) => (x === alp ? x.toUpperCase() : x))
    .join("");

  //replaceAll()을 활용해서 해당하는 문자만 바꿀 수 있다.
}
