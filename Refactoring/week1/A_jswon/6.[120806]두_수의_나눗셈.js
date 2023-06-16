/**
 * 문제 설명
 * 정수 num1과 num2가 매개변수로 주어질 때, 
 * num1을 num2로 나눈 값에 1,000을 곱한 후 
 * 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
 * 
 * 제한사항
 * 0 < num1 ≤ 100
 * 0 < num2 ≤ 100
 * 
 * 입출력 예
 * num1	  num2	result
 * 3	   2	 1500
 * 7	   3	 2333
 * 1	   16	  62
 * 
 * @param {Number} num1 정수1
 * @param {Number} num2 정수2
 * @returns num1을 num2로 나눈 값에 1000을 곱한 값의 정수 부분
 */
function solution(num1, num2) {
    // 01. num1을 num2로 나눈 값에 1000을 곱한다.
    // 02. 틸트 연산자를 사용하여 소수점을 제거한 뒤 반환한다.
    return ~~(num1/num2*1000);
}