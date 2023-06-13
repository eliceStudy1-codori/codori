function solution(arr) {
  var n = arr.length;

  for (let i = 0; i < n; i++) {
    // 이중 반복문을 사용해 arr[i][j]와 arr[j][i]를 비교함
    for (let j = 0; j < n; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }

  return 1;
}
