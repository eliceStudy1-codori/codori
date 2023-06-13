function solution(my_string) {
  // 문자열을 소문자로 변환하고, sort로 알파벳순으로 정렬하고 join을 사용해 배열의 요소를 하나의 문자열로 합침
  let answer = [...my_string.toLowerCase()].sort().join("");
  return answer;
}
