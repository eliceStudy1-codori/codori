function solution(n) {
    var answer = [];
    
    for(let i = 1; i <= n; i++) { //i를 1부터 n까지 순환시킵니다.
        if(i % 2 === 1) { //i를 2로 나누었을 때 1이 남도록해 홀수를 판별합니다.
            answer.push(i); // 홀수로 판명난 i들을 배열 answer로 내보냅니다.
        }
    }
    
    return answer;
}