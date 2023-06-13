function solution(my_string) {
  const set = new Set(my_string); // Set으로 중복된 문자를 제거함
  // 배열의 모든 요소를 하나의 문자열로 합침
  return [...set].join("");
}
