/**
 * 프로그래머스 0레벨 문제 - 문자열 정렬하기 (1) (120850)
 * @param { String } my_string 영어와 숫자로 이루어진 문자열
 * @returns my_string에서 오름차순으로 숫자로 이루어진 배열
 */

function solution(my_string) {
  // 1. 문자열을 배열로 변환 후 원소 중 숫자만 가진 배열을 반환
  // 2. split을 사용하면 문자로 형변환 후 배열에 넣기 때문에 숫자로 변환
  // 3. 오름차순으로 정렬
  return my_string
    .split("")
    .filter((x) => x % 1 == 0)
    .map((x) => Number(x))
    .sort((a, b) => a - b);
}
