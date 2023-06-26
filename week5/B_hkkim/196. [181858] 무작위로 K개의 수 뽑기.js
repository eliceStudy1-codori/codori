function solution(arr, k) {
  let answer = [];
  answer = [...new Set(arr)]; // Set으로 중복을 제거함
  let legnth = answer.length;

  if (answer.length > k) {
    // answer의 길이가 k보다 크면 배열의 길이를 k까지 자름
    answer = answer.splice(0, k);
  } else {
    for (let i = 0; i < k - legnth; i++) {
      // 완성될 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 push함
      answer.push(-1);
    }
  }

  return answer;
}
