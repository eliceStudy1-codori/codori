function solution(my_string) {
    var answer = '';
    for(let i = 0; i <my_string.length; i++){
        answer += my_string[my_string.length -1 -i]; //my_string의 맨 뒤부터 첫번째까지 역순으로 나타냅니다.
    }
    return answer;
}