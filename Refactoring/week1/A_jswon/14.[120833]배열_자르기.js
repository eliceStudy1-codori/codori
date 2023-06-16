/**
 * 문제 설명
 * 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, 
 * numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 * 2 ≤ numbers의 길이 ≤ 30
 * 0 ≤ numbers의 원소 ≤ 1,000
 * 0 ≤num1 < num2 < numbers의 길이
 * 
 * 입출력 예
 * numbers	        num1	    num2	    result
 * [1, 2, 3, 4, 5]	 1	         3	        [2, 3, 4]
 * [1, 3, 5]	     1	         2	        [3, 5]
 * 
 * @param {Array} numbers 정수 배열
 * @param {Number} num1 정수1
 * @param {Number} num2 정수2
 * @returns numbers의 num1번째 인덱스부터 num2번째 인덱스까지 자른 정수 배열
 */
function solution(numbers, num1, num2) {
    // 01. slice 메서드를 사용하여 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 반환한다.
    // slice 메서드의 두번 째 매개변수에 1을 더하는 이유는
    // 해당 인덱스까지 자르기 때문에 해당 인덱스의 요소는 포함이 되지 않기 때문이다.
    // 따라서 1을 더하여 배열을 자른다.
    return numbers.slice(num1, num2 + 1);
}