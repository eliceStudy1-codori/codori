function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    // 쿠폰이 열장 이상일때만, 반복문을 실행함
    answer = answer + parseInt(coupon / 10); // 쿠폰으로 시킬수 있는 치킨의 수를 더함
    coupon = parseInt(coupon / 10) + (coupon % 10); // 서비스 치킨에도 쿠폰이 발급되므로, 쿠폰 개수를 더해줌
  }

  return answer;
}
