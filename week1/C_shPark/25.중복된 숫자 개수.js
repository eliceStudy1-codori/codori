function solution(array, n) {
    var answer = 0;
    for(let i = 0; i < array.length ; i++){
        if(array[i] === n){ //배열을 순환하는 i가 n과 동일 할 때마다,
            answer += 1; // 카운트를 +1합니다.
        }
    }
    return answer;
}