/**
 * 문제 설명
 * 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
 *
 * 제한사항
 * numbers는 소문자로만 구성되어 있습니다.
 * numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
 * 1 ≤ numbers의 길이 ≤ 50
 * "zero"는 numbers의 맨 앞에 올 수 없습니다.
 *
 * 입출력 예
 * numbers	result
 * "onetwothreefourfivesixseveneightnine"	123456789
 * "onefourzerosixseven"	14067
 *
 * @param { String } numbers 영어 소문자로 이루어진 문자열
 * @returns numbers를 정수로 바꾼 값 반환
 */

function solution(numbers) {
  // 1. 0부터 9까지 해당하는 문자열을 배열로 생성
  var numStrArr = [
    "zero",
    "on",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // 2. 문자열 배열에 해당하는 숫자로 바꾸어 합치고 정수형으로 반환
  numStrArr.forEach((nums, index) => {
    numbers = numbers.split(nums).join(index);
  });

  return Number(numbers);
}
