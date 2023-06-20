/**
 * 문제 설명
 * 외과의사 머쓱이는 응급실에 온 환자의 응급도를 
 * 기준으로 진료 순서를 정하려고 합니다. 
 * 정수 배열 emergency가 매개변수로 주어질 때 
 * 응급도가 높은 순서대로 진료 순서를 정한 배열을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 중복된 원소는 없습니다.
 * 1 ≤ emergency의 길이 ≤ 10
 * 1 ≤ emergency의 원소 ≤ 100
 * 
 * 입출력 예
 * emergency	            result
 * [3, 76, 24]	            [3, 1, 2]
 * [1, 2, 3, 4, 5, 6, 7]	[7, 6, 5, 4, 3, 2, 1]
 * [30, 10, 23, 6, 100]	    [2, 4, 3, 5, 1]
 * 
 * @param {Array} emergency 정수 배열(응급도)
 * @returns 응급도에 따른 순서 배열
 */
function solution(emergency) {
    // 01. emergency를 slice 메서드를 사용하여 깊은 복사한다.
    //     깊은 복사를 진행하지 않으면 참조가 발생하여 
    //     해당 데이터를 독립적으로 사용할 수 없다.
    let copyArr = emergency.slice();
    // 02. emergency를 내림차순 정렬하여 저장한다.
    let sortArr = emergency.sort((a,b) => b - a);
    // 03. 입력받은 배열과 내림차순 정렬된 배열은 서로 다르므로
    //     입력 배열을 map 메서드를 사용하여 정렬된 배열의 값의 인덱스를 찾는다.
    //     인덱스는 0부터 시작이므로 1을 더해준 뒤 반환한다.
    return copyArr.map((x,i) => sortArr.indexOf(x) + 1);
}