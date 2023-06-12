
/**
 * 문제 설명
 * 정수 num과 k가 매개변수로 주어질 때, 
 * num을 이루는 숫자 중에 k가 있으면 
 * num의 그 숫자가 있는 자리 수를 return하고 
 * 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 * 0 < num < 1,000,000
 * 0 ≤ k < 10
 * num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.
 * 
 * 입출력 예
 * num	    k	result
 * 29183	1	  3
 * 232443	4	  4
 * 123456	7	 -1
 * 
 * @param {Number} num 정수 
 * @param {Number} k 매개변수 정수
 * @returns num의 그 숫자가 있는 자리 수, 없으면 -1
 */
function solution(num, k) {
    // 01. 정수를 문자열로 변환하고, 배열로 변환한다.
    // 02. findIndex 메서드를 사용하여 해당 배열에 특정 정수가 있는지 찾는다.
    // 있으면 해당 인덱스를 반환하고, 없으면 -1을 반환한다.
    let answer = [...num.toString()].findIndex(x => +x === k);
    // 03. 인덱스가 0보다 크거나 같으면 숫자가 존재한다는 의미이므로
    // 인덱스에 1을 더한 값(자릿수)을 반환하고, 없으면 그대로 반환한다(-1)
    return answer >= 0 ? ++answer : answer; 
}