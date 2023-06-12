/*가장 큰 수 찾기
문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다.
입출력 예
array	result
[1, 8, 3]	[8, 1]
[9, 10, 11, 8]	[11, 2]*/
function solution(array) {
    //max()메소드로 배열 중에서 가장 큰 수 찾기
    let result = Math.max(...array);
    let resultarr = 0;
    //let result 의 자릿수 찾기
    for (let i = 0; i < array.length; i++) {
      if (array[i] === result) {
        resultarr = i;
      }
    }
    return [result, resultarr];
  }
  //indexOf로 더 간단히 표현 가능했습니다.
  //let resultarr = array.indexOf(result);