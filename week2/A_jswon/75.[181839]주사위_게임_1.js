/**
 * 문제 설명
 * 1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다. 
 * 두 주사위를 굴렸을 때 나온 숫자를 각각 a, b라고 했을 때 얻는 점수는 다음과 같습니다.
 * a와 b가 모두 홀수라면 a^2 + b^2 점을 얻습니다.
 * a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
 * a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
 * 두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한사항
 * a와 b는 1 이상 6 이하의 정수입니다.
 * 
 * 입출력 예
 * a	b	result
 * 3	5	  34
 * 6	1	  14
 * 2	4	  2
 * 
 * @param {Number} a 주사위 숫자(1~6)
 * @param {Number} b 주사위 숫자(1~6)
 * @returns 조건에 따라 다른 값 반환
 */ 
function solution(a, b) {
    // 1. 반환 값 초기화
    let answer = 0;
    // 2. 3가지 조건에 대하여 반환 값에 계산값을 할당한다.
    if(a % 2 === 1 && b % 2 === 1) {
        answer = Math.pow(a, 2) + Math.pow(b, 2);
    }
    else if((a % 2 === 1 && b % 2 === 0) || (a % 2 === 0 && b % 2 === 1)) {
        answer = 2 * (a + b);
    }
    else {
        answer = Math.abs(a - b);
    }
    // 3. 값을 반환한다.
    return answer;
}