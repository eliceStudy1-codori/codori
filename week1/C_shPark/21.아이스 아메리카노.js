function solution(money) {
    var answer = [];
    let x = 0;
    for(let i = 1 ; i <= money ; i++){
        if(money >= 5500){ // i가 순환하면서 money가 5500보다 크면(작으면 순환 종료)
            x++;  // x에 1을 더하고
            money-=5500; // money에서 5500을 뺍니다.
        }
    }
    return [x,money];
}