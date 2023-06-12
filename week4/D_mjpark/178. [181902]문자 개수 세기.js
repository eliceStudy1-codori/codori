/**
 * 문제 설명
 * 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
 *
 * 제한사항
 * 1 ≤ my_string의 길이 ≤ 1,000
 *
 * 입출력 예
 * my_string	result
 * "Programmers"	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
 *
 * @param { String } my_string 알파벳 대·소문자로 이루어진 문자열
 * @returns "A"부터 "z"까지 해당하는 개수를 순서대로 담은 길이 52의 정수 배열
 */

function solution(my_string) {
  // 1. my_string에서 찾기위해 A부터 z까지 문자열 생성
  // 2. 새롭게 반환할 0으로 이루어진 길이 52의 배열 생성
  // 3. my_string을 각 원소로 나누어 al에 해당하는 인덱스 위치에 1씩 증가

  let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let arr = Array(52).fill(0);

  my_string.split("").map((x) => (arr[al.indexOf(x)] += 1));

  return arr;
}

// function solution(my_string) {
//     const arr = Array(52).fill(0)
//     return [...my_string].reduce((acc, cur) => {
//         let curIdx
//         const curAlpha= cur.charCodeAt()
//         if(curAlpha >= 97) {
//          curIdx = curAlpha - 71
//         } else {
//          curIdx = curAlpha-65
//         }

//         acc[curIdx] = acc[curIdx] ?? 0
//         acc[curIdx]++
//         return acc
//     }, arr)
// }
