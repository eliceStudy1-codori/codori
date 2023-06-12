/*
합성수 찾기
문제 설명
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 100
입출력 예
n	result
10	5
15	8*/
function solution(n) {
    var answer = 0;
    //최초의 합성수 4(1,2,4)를 초기값으로 설정하였습니다.
    //이외에는 동일한 약수찾기
    for(let i = 4; i <= n; i++){
        for(let j = 2; j < i; j++){
            //약수를 찾을때마다 카운트하였습니다.
            if(i % j === 0){
                answer++;
                break;
            }
        }
    }
    return answer;
}