/**
 * 프로그래머스 0레벨 문제 - 양꼬치 (120830)
 * @param { Number } n 주문한 음식 개수(n인분) * 12,000원
 * @param { Number } k 음료수 개수 : 2,000원
 * @param { Number } serviceDrinkPrice 메뉴 10인분당 음료수 1개 서비스로 받은 음료수 비용
 * @returns 총 먹은 음식 + 음료수 비용에서 서비스로 받은 음료수 비용 감산
 */

function solution(n, k) {
  // 1. 메뉴 10인분당 음료수 1개 서비스로 받은 음료수 비용 구하기.
  let serviceDrinkPrice = parseInt(n / 10) * 2_000;

  // 2. 지불 금액 계산
  return n * 12_000 + k * 2_000 - serviceDrinkPrice;
}
