function solution(babbling) {
  let arr = [];
  for (let i = 0; i < babbling.length; i++) {
    arr.push(babbling[i].replace(/(aya|ye|woo|ma)/g, "")); // 정규식을 사용해 aya,ye,woo,ma가 있으면 제거해서 push함
  }
  return arr.filter((item) => item == "").length; // filter로 빈 문자열의 개수를 세어 return함
}
