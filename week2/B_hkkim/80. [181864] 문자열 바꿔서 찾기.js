function solution(myString, pat) {
  // replaceAll을 사용해 A를 X로 바꾸고 B를 A로 바꾸고 X를 B로 바꾼다.
  // A를 바로 B로 바꾸면 다시 A로 바뀌기 때문에 X로 먼저 바꿔줌
  const transformedPattern = pat
    .replaceAll("A", "X")
    .replaceAll("B", "A")
    .replaceAll("X", "B");
  // 바꾼 문자열 중 pat이 존재하면 1 아니면 0을 반환함
  return myString.includes(transformedPattern) ? 1 : 0;
}
