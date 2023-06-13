function solution(order) {
  // ... Speread opreator를 사용해 객체를 개별 요소로 분리함
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length; // 정규 표현식을 사용해 3,6,9가 있는지 확인함
  // matchAll 메서드를 사용해 정규 표현식과 일치하는 문자열을 포함한 배열을 반환하고, 배열의 길이를 반환함
  return answer;
}
