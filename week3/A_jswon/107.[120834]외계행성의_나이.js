/**
 * 문제 설명
 * 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 
 * 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. 
 * a는 0, b는 1, c는 2, ..., j는 9입니다. 
 * 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 
 * 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * age는 자연수입니다.
 * age ≤ 1,000
 * PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
 * 
 * 입출력 예
 * age	result
 * 23	   "cd"
 * 51	   "fb"
 * 100	"baa"
 * 
 * @param {Number} age 나이 
 * @returns PROGRAMMER-962 식 나이
 */
function solution(age) {
  // 01. 반환값 초기화
  let answer = "";
  // 02. 나이를 문자열로 변환 후 배열로 변환. map을 이용하여 숫자 배열로 변환
  let data = age.toString().split('').map(x => +x);
  // 03. forEach 메소드를 이용하여 숫자 각 데이터들을 아스키코드 변환
  data.forEach((x,i) => {
    // 04. 루프를 돌며 문자열로 더해준다.
    answer += String.fromCharCode(x+97);
  })
  // 05. 반환한다.
  return answer;
}