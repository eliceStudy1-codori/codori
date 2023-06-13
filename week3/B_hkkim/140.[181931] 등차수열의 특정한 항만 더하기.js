function solution(a, d, included) {
  let answer = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      // included[i]가 true인 항들만 더함
      answer += a + i * d;
    }
  }

  return answer;
}
