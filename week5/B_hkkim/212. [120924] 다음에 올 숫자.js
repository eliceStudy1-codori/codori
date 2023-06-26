function solution(common) {
  let answer;
  // 만약 common[1]-common[0]이 common[2]-common[1]과 같다면, 등차수열이므로
  // answer의 그 값을 할당하고, 마지막 원소에 answer를 더한 값을 반환한다.
  if (common[1] - common[0] === common[2] - common[1]) {
    answer = common[1] - common[0];
    return common[common.length - 1] + answer;
  }
  // 만약 common[1]/common[0]이 common[2]/common[1]과 같다면, 등비수열이므로
  // answer의 그 값을 할당하고 마지막 원소에 answer를 더한 값을 반환한다.
  if (common[1] / common[0] === common[2] / common[1]) {
    answer = common[1] / common[0];
    return common[common.length - 1] * answer;
  }
}
