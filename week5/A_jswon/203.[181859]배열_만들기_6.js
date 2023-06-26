/**
 * 문제 설명
 * 0과 1로만 이루어진 정수 배열 arr가 주어집니다. 
 * arr를 이용해 새로운 배열 stk을 만드려고 합니다.
 * i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복합니다.
 * 만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
 * stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면 
 * stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.
 * stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면 
 * stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.
 * 위 작업을 마친 후 만들어진 stk을 return 하는 solution 함수를 완성해 주세요.
 * 단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.
 * 
 * 제한사항
 * 1 ≤ arr의 길이 ≤ 1,000,000
 * arr의 원소는 0 또는 1 입니다.
 * 
 * 입출력 예
 * arr	                result
 * [0, 1, 1, 1, 0]	    [0, 1, 0]
 * [0, 1, 0, 1, 0]	    [0, 1, 0, 1, 0]
 * [0, 1, 1, 0]	        [-1]
 * 
 * @param {Array} arr 0과 1로만 이루어진 정수 배열
 * @returns 작업을 마친 후 만들어진 배열
 */
function solution(arr) {
    // 01. 빈 배열 선언
    let stk = [];
    // 02. for loop 수행
    for(let i=0; i<arr.length; i++) {
        // 03. 배열의 길이가 0보다 클 경우
        if(stk.length > 0) {
            // 03-1. stk의 이전 값과 arr의 값이 같을 경우
            if(stk[stk.length-1] === arr[i]){
                // 03-2. stk의 원소를 제거한다.
                stk.pop();
            }
            else {
                // 03-3. 그렇지 않을 경우 arr의 원소를 추가해 준다.
                stk.push(arr[i]);
            }
        }
        // 04. 배열의 길이가 0일 경우 arr의 원소를 추가해 준다.
        else stk.push(arr[i]);
    }
    // 05. 배열의 길이가 1 이상이라면 배열을 반환하고, 빈 배열일 경우 [-1]을 반환한다.
    return stk.length ? stk : [-1];
}