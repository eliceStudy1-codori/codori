function solution(dot) {
    var answer = 0;
    let x = dot[0]; // 두 매개변수를 x와 y로 지정합니다.
    let y = dot[1];
    if(x>0 && y>0){ //x,y가 양수와 음수일 때 위치 번호를 지정해줍니다.
        answer= 1;
    } else if(x<0 && y>0){ //조건이 이어져야하기 때문에 else if를 사용합니다.
        answer= 2;
    } else if(x<0 && y<0){
        answer= 3;
    } else {
        answer= 4;
    }
    
    return answer;
}