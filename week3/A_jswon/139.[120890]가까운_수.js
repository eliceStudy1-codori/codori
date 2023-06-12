/**
 * 문제 설명
 * 정수 배열 array와 정수 n이 매개변수로 주어질 때, 
 * array에 들어있는 정수 중 n과 가장 가까운 수를 
 * return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 1 ≤ array의 길이 ≤ 100
 * 1 ≤ array의 원소 ≤ 100
 * 1 ≤ n ≤ 100
 * 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
 * 
 * 입출력 예
 *   array	     n	 result
 * [3, 10, 28]	 20	  28
 * [10, 11, 12]	 13	  12
 * [1, 4, 2, 1]   3    2 
 * [10, 11, 13]  12   11
 * 
 * @param {Array} array 숫자 배열
 * @param {Number} n 숫자
 * @returns n에 가장 가까운 수. 가까운 수가 여러개일 경우 더 작은 수
 */
function solution(array, n) {
    // 01. 배열의 원소들에 각각 n을 빼준다.
    let mapArray = array.map(x => x - n);
    // 02. 절댓값 기준으로 가장 작은 순서로 정렬한다.
    let resultArray = mapArray.sort((a,b) => Math.abs(a) - Math.abs(b));
    // 03. 구조 분해 할당을 사용하여 배열의 0번째 요소, 1번째 요소를 담는다.
    let [result1, result2] = resultArray;
    // 04. 결과값을 result1으로 초기화한다.
    let result = result1;
    // 05. 0번째 요소(result1)와 1번째 요소(result2)의 절댓값이 같다면
    // 조건문을 실행한다.
    if(Math.abs(result1) === Math.abs(result2)) {
        // 05-1. result1과 result2가 순서 예시
        // 1) result1 = 1, result2 = -1 ->  ([1, 4, 2, 1], 3) 의 경우
        // 2) result1 = -1, reusult2 = 1 -> ([10, 11, 13], 12) 의 경우
        // 두 경우가 있다. 따라서 더 작은 숫자를 반환하여 결과값에 저장한다.
        result = result1 > result2 ? result2 : result1;
    }
    // 06. 기존에 뺄셈 처리 했던 정수 n 값을 다시 더한 후 반환한다.
    return result + n;
}