function solution(num_list, n) {
  let result = [];

  // i를 n으로 나눈 나머지가 0이면 n번째 원소이기 때문에 num_list[i]를 푸쉬함
  for (let i = 0; i < num_list.length; i++) {
    if (i % n == 0) {
      result.push(num_list[i]);
    }
  }

  return result;
}
