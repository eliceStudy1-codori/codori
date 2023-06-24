function solution(n) {
    let result = [];
    let divisor = 2;
    
    while (n >= 2) { // n이 2이하가 될때까지 반복함
      if (n % divisor === 0) { // n을 divisor로 나눴을때 0이 되면 소수이므로 result에 divisor를 push함
        result.push(divisor)
        n = n / divisor; // 소수로 n을 나눔
      }
       else divisor ++;
    }
    
    return [...new Set(result)]; // Set 객체를 사용해서 중복을 제거함
  }