/**
 * 문제 설명
 * 개미 군단이 사냥을 나가려고 합니다. 
 * 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 
 * 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 
 * 예를 들어 체력 23의 여치를 사냥하려고 할 때, 
 * 일개미 23마리를 데리고 가도 되지만, 
 * 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 
 * 사냥감의 체력 hp가 매개변수로 주어질 때, 
 * 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 
 * 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * hp는 자연수입니다.
 * 0 ≤ hp ≤ 1000
 * 
 * 입출력 예
 * hp	result
 * 23	5
 * 24	6
 * 999	201
 * 
 * @param {Number} hp 사냥감의 체력
 * @returns 최소한의 병력 수
 */
function solution(hp) {
    // 1. 결과값 초기화, 병력 계산할 변수 초기화
    let answer = 0;
    let remain = hp;
    // 2. 병력별 전투력(공격력) 초기화
    const general = 5; // 장군개미
    const soldier = 3; // 병정개미
    const slave = 1;   // 일개미
    
    // 최소한의 병력 수가 필요하므로 장군개미부터 순차적으로 계산한다.
    // 3. hp 값에서 장군개미 공격력을 나눈 값을 결과값에 더하고, hp 값의 나머지를 저장한다.
    answer += Math.floor(remain / general);
    remain %= general;
    // 4. hp 값에서 병정개미 공격력을 나눈 값을 결과값에 더하고, hp 값의 나머지를 저장한다.
    answer += Math.floor(remain / soldier);
    remain %= soldier;
    // 5. hp 값에서 일개미 공격력을 나눈 값을 결과값에 더한다.
    answer += Math.floor(remain / slave);
    
    // 6. 최소 전투력 결과값을 반환한다.
    return answer;
} 