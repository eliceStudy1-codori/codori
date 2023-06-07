function solution(arr, n) {
  return arr.map((v, i, arr) => {
    // map을 사용해 arr 배열의 각 요소를 변환시킴
    if (arr.length % 2 === 1) {
      // arr의 길이가 홀수면 모든 짝수에 n을 더함
      if (i % 2 === 0) return v + n;
      else return v;
    } else {
      // arr의 길이가 짝수면 모든 홀수에 n을 더함
      if (i % 2 === 1) return v + n;
      else return v;
    }
  });
}
