function solution(a, b, c, d) {
  const nums = [a, b, c, d]; // 주사위를 굴렸을 때 나온 숫자를 배열에 담음
  const obj = {}; // 빈 객체 선언
  for (let i = 0; i < 4; i++) {
    if (obj[nums[i]]) {
      // 각 숫자의 등장 횟수를 더함
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]); // 배열을 내림차순으로 정렬

  if (arr.length === 1) {
    // arr의 길이가 1이면 모든 숫자가 동일하므로 1111을 곱해서 return함
    return 1111 * +arr[0][0];
  }
  if (arr.length === 2) {
    // arr의 길이가 2일때,
    if (arr[0][1] === 3) {
      // arr[0][1]의 값이 3이면, 세개의 주사위 숫자가 같은 경우
      return (10 * +arr[0][0] + +arr[1][0]) ** 2;
    } // 아닐시에는 두개의 주사위 숫자가 같은 경우
    return (+arr[0][0] + +arr[1][0]) * Math.abs(+arr[0][0] - +arr[1][0]);
  }
  if (arr.length === 3) {
    // arr의 길이가 3이면, 두 개의 주사위 숫자가 같고, 나머지 두 숫자가 모두 다른 경우
    return +arr[1][0] * +arr[2][0];
  }

  return +arr.sort((a, b) => +a[0] - +b[0])[0][0]; // 그 외의 경우에, 네 개의 주사위 숫자가 모두 다른 경우이므로 가장 작은 숫자를 반환함
}
