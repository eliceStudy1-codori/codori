function solution(str1, str2) {
  var answer = "";

  const length = Math.max(str1.length, str2.length); // max를 사용해 두 문자열 중 더 긴 문자열의 길이를 저장함

  for (let i = 0; i < length; i++) {
    // for문을 통해 각 문자열의 요소를 하나씩 더함
    if (i < str1.length) {
      answer += str1[i];
    }
    if (i < str2.length) {
      answer += str2[i];
    }
  }

  return answer;
}
