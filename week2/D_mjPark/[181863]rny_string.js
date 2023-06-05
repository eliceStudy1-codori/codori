/**
 * 프로그래머스 0레벨 문제 - rny_string (181863)
 * @param { String } rny_string 영소문자로 이루어진 문자열
 * @returns rny_sring 중 m이 존재하면 rn으로 변환한 문자열
 */

function solution(rny_string) {
  // 1. 주어진 문자열에 "m"을 모두 "rn"으로 바꾼다
  return rny_string.replaceAll("m", "rn");

  // 정규식을 사용하여 rny_string.replace(/m/g,'rn') -> (m을 전역에서 바꿈, 'rn'으로)
}
