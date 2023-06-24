function solution(arr, flag) {
  var answer = [];
  for(let i=0; i<flag.length; i++) {
      if(flag[i]==true) { // flag[i]가 true일시, 배열을 2번추가해서 푸쉬함
          for(let j=0; j<arr[i]*2; j++) {
              answer.push(arr[i])
          }
      } else { // flag[i]가 false라면, arr[i]개의 원소를 제거함
          for(let j=0; j<arr[i]; j++) { 
              answer.pop()
          }
      }
  }
  return answer;
}