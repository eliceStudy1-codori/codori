/**
 * 문제 설명
 * 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 
 * 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 
 * return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 1 ≤ i < j ≤ 100,000
 * 0 ≤ k ≤ 9
 * 
 * 입출력 예
 * i	j	k	result
 * 1	13	1	6
 * 10	50	5	5
 * 3	10	2	0
 * 
 * @param {Number} i 시작 정수
 * @param {Number} j   끝 정수
 * @param {Number} k 등장하는 정수
 * @returns i부터 j까지 k가 몇 번 등장하는지의 값
 */
function solution(i, j, k) {
    // 01. 배열을 길이 j-i+1만큼 만들어주고, 값을 0으로 채운다.
    // 02. map 메서드를 사용하여 시작 정수 i부터 값을 1씩 차례대로 채워준다.
    // 03. join 메서드를 사용하여 문자열로 변환한다.
    // 04. split 메서드를 사용하여 한 문자씩 잘라 배열로 변환한다.
    // 05. filter 메서드를 사용하여 k와 같은 요소만 배열로 반환한다.
    let arr = Array.from({length: j-i+1}, () => 0)
                .map((_, idx) => i + idx)
                .join('')
                .split('')
                .filter(x => +x === k);
    // 06. 배열의 길이를 반환한다.
    return arr.length;
}
