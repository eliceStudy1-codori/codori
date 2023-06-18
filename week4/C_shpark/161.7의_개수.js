/*
문제 설명
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 100,000
입출력 예
array	result
[7, 77, 17]	4
[10, 29]	0*/
function solution(array) {
    return array
            //join과 split으로 배열을 나누고,
            .join('')
            .split('')
            //filter메소드로 7이 몇개인지 확인 후 length로 출력하였습니다.
            .filter(e => e == '7')
            .length;
}