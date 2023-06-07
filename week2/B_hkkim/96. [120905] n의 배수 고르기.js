function solution(n, numlist) {
  let answer = [];

  // numlist에서 n의 배수만 answer에 push함
  for (let i of numlist) if (i % n === 0) answer.push(i);
  return answer;
}
