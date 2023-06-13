function solution(numbers, direction) {
  if (direction === "right") {
    // pop을 사용해 마지막 요소를 제거하고 해당 요소를 배열의 맨 앞에 추가함
    numbers.unshift(numbers.pop());
  } else {
    // shift를 사용해 배열의 첫번째 요소를 제거하고 해당 요소를 배열의 마지막에 추가함
    numbers.push(numbers.shift());
  }
  return numbers;
}
