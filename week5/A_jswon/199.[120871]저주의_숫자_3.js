/**
 * 문제 설명
 * 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 
 * 3의 배수와 숫자 3을 사용하지 않습니다. 
 * 3x 마을 사람들의 숫자는 다음과 같습니다.
 * 
 * 10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자
 * 1	            1	            6	            8
 * 2	            2	            7	            10
 * 3	            4	            8	            11
 * 4	            5	            9	            14
 * 5	            7	            10	            16
 * 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 1 ≤ n ≤ 100
 * 
 * 입출력 예
 * n	result
 * 15	25
 * 40	76
 * 
 * @param {Number} n 정수
 * @returns 3x마을 사람들 기준의 입력받은 숫자
 */
function solution(n) {
    // 01. 반환값을 선언한다.
    let answer = 0;
    // 02. for loop를 수행한다.
    for(let i=0; i<n; i++) {
        // 03. answer 값을 1씩 증가시킨다.
        answer++;
        // 04. answer가 3으로 나눴을 때 나머지가 0이거나,
        //     answer에 3이 포함되어 있을 경우에는 i를 1씩 감소시킨다.
        if(answer % 3 === 0 || answer.toString().indexOf(3) > -1) i--;
    }
    // 05. for loop 수행이 끝나면 증가된 answer 값을 반환한다.
    return answer;
}