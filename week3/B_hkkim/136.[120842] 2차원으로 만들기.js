function solution(num_list, n) {
  let answer = [];

  for (let i = 0; i < num_list.length / n; i++) {
    // num_list.length/n 만큼 for문을 돌림
    answer.push(num_list.slice(i * n, i * n + n)); // n의 길이만큼 배열을 잘라내서 새로운 배열을 만듬
  }

  return answer;
}
