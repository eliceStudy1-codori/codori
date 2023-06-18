/*문제 설명
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

제한사항
1 ≤ balls ≤ 30
1 ≤ share ≤ 30
구슬을 고르는 순서는 고려하지 않습니다.
share ≤ balls
입출력 예
balls	share	result
3	2	3
5	3	10
입출력 예 설명
입출력 예 #1

서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다. 

서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.
Hint
서로 다른 n개 중 m개를 뽑는 경우의 수 공식은 다음과 같습니다. 
    n! / ((n-m)! * m!)  

n!(계승.factorial). 3!: 3*2*1, 5! = 5*4*3*2*1
*/
function solution(balls, share) {
    let fact = [];
    //fact[]의 초기값을 설정
    fact[0] = 1;
    for(let i = 1; i <= 30; i++)
        fact[i] = fact[i - 1] * i;
    //Hint에 나온 공식대로 return
    return fact[balls] / (fact[balls - share] * fact[share]);
}