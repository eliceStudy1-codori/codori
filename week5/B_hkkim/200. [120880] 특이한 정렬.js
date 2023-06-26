function solution(numlist, n) {
  return numlist.sort((a, b) => {
    // n에서 배열의 요소를 뺀 절대값이 작은 순으로 정렬함
    if (Math.abs(n - a) === Math.abs(n - b)) {
      // 절대값이 같다면 더 큰수를 앞에 오도록 배치함
      return b - a;
    }
    return Math.abs(n - a) - Math.abs(n - b);
  });
}
