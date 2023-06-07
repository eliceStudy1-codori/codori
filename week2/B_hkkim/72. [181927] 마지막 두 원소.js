function solution(n) {
  var answer = [];

  if (n[n.length - 1] > n[n.length - 2]) {
    // 마지막 원소가 그전 원소보다 크면 그전 원소를 뺀 값 push
    n.push(n[n.length - 1] - n[n.length - 2]);
  } else {
    // 크지 않으면 마지막 원소 두배 값 push
    n.push(n[n.length - 1] * 2);
  }
  ß;

  return n;
}
