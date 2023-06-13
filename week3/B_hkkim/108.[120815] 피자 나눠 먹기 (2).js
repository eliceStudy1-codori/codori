function solution(n) {
  let pizza = 6;

  while (pizza % n !== 0) {
    //  피자의 수가 사람의 수로 나눴을때 나머지가 0일때까지 6을 더함
    pizza += 6;
  }
  return pizza / 6;
}
