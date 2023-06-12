/*
가까운 1 찾기
문제 설명
정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.

단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.

제한사항
3 ≤ arr의 길이 ≤ 100'000
arr의 원소는 전부 1 또는 0입니다.
입출력 예
arr	idx	result
[0, 0, 0, 1]	1	3
[1, 0, 0, 1, 0, 0]	4	-1
[1, 1, 1, 1, 0]	3	3*/
function solution(arr, idx) {
    //idx에서 i를 출발시키고 1과 동일한 걸 찾을때까지 반복 있으면 i, 없으면 -1을 출력하였습니다.
    for(let i = idx ; i < arr.length; i++) {
        const answer = arr[i]
        if(answer === 1) {
    return i;
    }
}
    return -1;
}
/* 
indexOf는 해당하는게 없으면 -1을 반환하기에 indexOf를 사용하면 간단히 표현 가능
    function solution(arr, idx) {
     return arr.indexOf(1,idx);
    } 
*/