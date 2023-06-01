/**
 * 숫자1과 숫자2를 비교하여 같으면 1 다르면 -1 반환
 * @param {숫자1} num1 
 * @param {숫자2} num2 
 * @returns 숫자가 같으면 1, 다르면 -1
 */
function solution(num1, num2) {
    // 숫자가 같은지를 삼항연산자를 이용하여 비교하고, 같으면 1 다르면 -1을 반환한다.
    return num1 === num2 ? 1 : -1;
}
