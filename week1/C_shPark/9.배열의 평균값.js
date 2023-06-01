function solution(numbers) {
    return numbers.reduce((a,b) => a+ b) / numbers.length; //reduce()매서드로 배열의 합을 구하고, 배열의 갯수로 나눕니다.
}