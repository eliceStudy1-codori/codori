function solution(arr) {
  var stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      // stk가 비어있는 경우 arr[i]를 push한다.
      stk.push(arr[i]);
      continue;
    }
    if (stk[stk.length - 1] < arr[i]) {
      // stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 뒤에 추가한다.
      stk.push(arr[i]);
      continue;
    }

    stk.pop(); // 그 외에 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 제거한다.
    i--;
  }

  return stk;
}
