function solution(my_string, n) {
    return my_string.slice(my_string.length-n, my_string.length);
}
//slice 메소드는 (시작부분,끝부분)을 인자로 가지고 있습니다.
//my_string.length-n를 통해 n의 자리수만큼 표시 될 수 있도록 합니다.