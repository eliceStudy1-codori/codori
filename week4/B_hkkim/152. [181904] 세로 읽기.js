function solution(my_string, m, c) {
    let answer ="";
    // my_string을 m의 간격으로 증가시킴
    for(let i = c-1; i < my_string.length ; i+=m) answer+=my_string[i];
    return answer;
}