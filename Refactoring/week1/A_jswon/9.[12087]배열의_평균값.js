/**
 * 문제 설명
 * 정수 배열 numbers가 매개변수로 주어집니다. 
 * numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 0 ≤ numbers의 원소 ≤ 1,000
 * 1 ≤ numbers의 길이 ≤ 100
 * 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.
 * 
 * 입출력 예
 * numbers	                                        result
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	                 5.5
 * [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]	    94.0
 * 
 * @param {Array} numbers 정수 배열
 * @returns 배열의 평균값
 */
function solution(numbers) {
    // 01. reduce 메서드를 이용하여 배열의 원소 합을 구하여 저장한다.
    let sum = numbers.reduce((acc, cur) => {return acc + cur}, 0);
    // 02. 배열의 원소 합에 배열의 길이를 나누어 반환한다.
    return sum / numbers.length;
}