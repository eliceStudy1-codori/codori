function solution(numLog) {

    let array = [...numLog] // spread opreator 사용
    let answer = []; // 배열 초기화
    for(let i=0;i<array.length;i++){ // 반복문으로 switch를 활용해 조작을 위해 입력받은 문자열 return
      switch(array[i+1]-array[i]){
        case 1:
          answer.push('w')
          break;
        case -1:
          answer.push('s')
          break
        case 10:
          answer.push('d')
          break;
        case -10:
          answer.push('a')
          break;
      }
  }
  return answer.join('');
  }