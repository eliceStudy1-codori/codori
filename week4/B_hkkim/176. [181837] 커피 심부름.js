function solution(order) {
    return order.reduce((acc, cur) => {
      if (cur.includes("americano")) { // 아메리카노면 4500을 더함
        return acc + 4500;
      } else if (cur.includes("cafelatte")) { // 카페라떼면 5000을 더함
        return acc + 5000;
      } else { // 아무거나를 적었을시 아메리카노이므로 4500을 더함
        return acc + 4500;
      }
    }, 0);
  }
  