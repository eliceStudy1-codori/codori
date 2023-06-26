function solution(rank, attendance) {
  let answer = [];
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) answer.push(rank[i]); // attendance[i]가 true일 경우 rank[i]를 answer에 push함
  }
  answer.sort((a, b) => a - b); // answer 배열을 오름차순으로 정렬함

  return (
    10000 * rank.indexOf(answer[0]) +
    100 * rank.indexOf(answer[1]) +
    rank.indexOf(answer[2])
  );
  // indexOf로 선발된 학생 번호들에 연산을 한 다음 더해줌
}
