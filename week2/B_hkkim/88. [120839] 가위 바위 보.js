function solution(rsp) {
  let answer = "";

  // 문자열의 길이만큼 for문을 돌림
  for (let i = 0; i < rsp.length; i++) {
    // 인덱스를 통해 문자열의 각 문자에 접근하므로 배열로 묵시적 형변환이 됨
    // 삼항 연산자를 이용해 가위 바위 보를 모두 이기는 경우를 문자열로 answer에 더함
    rsp[i] === "2"
      ? (answer += "0")
      : rsp[i] === "0"
      ? (answer += "5")
      : (answer += "2");
  }
  return answer;
}
