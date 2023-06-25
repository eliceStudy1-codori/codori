/*
연속된 수의 합
문제 설명
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

제한사항
1 ≤ num ≤ 100
0 ≤ total ≤ 1000
num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
입출력 예
num	total	result
3	12	[3, 4, 5]
5	15	[1, 2, 3, 4, 5]
4	14	[2, 3, 4, 5]
5	5	[-1, 0, 1, 2, 3]*/
function solution(num, total) {
    //결과 배열의 초기값을 구하기 위해 ceil(정수로 올림),floor(소수점 버림) 메소드를 사용.
    const min = Math.ceil(total / num - Math.floor(num / 2));
    //길이가 num인 배열을 만들고, 최소값 min부터 배열이 시작되도록 함.
    return Array.from({ length: num }, (_, i) => i + min);
}
