function solution(code) {
  var answer = "";

  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (code[i] == "1") {
      if (mode == 0) {
        mode = 1;
      } // code[i]가 1이고 mode가 0일때 mode를 0에서 1로 바꾼다.
      else {
        mode = 0;
      } // code[i]가 1이고 mode가 1이면 mode를 0으로 바꾼다.
      continue;
    }
    if (mode == 1 && i % 2 == 1) {
      // mode가 1이고 i가 홀수일때 answer의 맨 뒤에 code[i]를 추가한다.
      answer += code[i];
    } else if (mode == 0 && i % 2 == 0) {
      answer += code[i]; // mode가 0이고 i가 짝수일 때 answer의 맨 뒤에 code[i]를 추가한다.
    }
  }

  if (answer.length == 0) {
    // answer가 빈 문자열이면 "EMPTY"를 return 한다.
    return "EMPTY";
  }

  return answer;
}
