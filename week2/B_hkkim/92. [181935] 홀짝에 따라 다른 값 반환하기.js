function solution(n) {
  var answer = 0;

  if (n % 2 == 0) {
    // n이 짝수면 n 이하의 짝수를 모두 더함
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) {
        answer += i * i;
      }
    }
  } else {
    // n이 홀수면 n 이하의 홀수를 모두 더함
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 1) {
        answer += i;
      }
    }
  }
  return answer;
}
