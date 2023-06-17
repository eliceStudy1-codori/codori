/**
 * 문제 설명
 * 문자열 배열 intStrs와 정수 k, s, l가 주어집니다. 
 * intStrs의 원소는 숫자로 이루어져 있습니다.
 * 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 
 * 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 
 * 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 0 ≤ s < 100
 * 1 ≤ l ≤ 8
 * 10^l - 1 ≤ k < 10^l
 * 1 ≤ intStrs의 길이 ≤ 10,000
 * s + l ≤ intStrs의 원소의 길이 ≤ 120
 * 
 * 입출력 예
 * intStrs	                                    k	    s	l	result
 * ["0123456789","9876543210","9999999999999"]	50000	5	5	[56789, 99999]
 * 
 * @param {Array} intStrs 문자열 배열
 * @param {Number} k 정수 k
 * @param {Number} s 정수 s
 * @param {Number} l 정수 l
 * @returns 변환한 정수값이 k보다 큰 값들을 담은 배열
 */
function solution(intStrs, k, s, l) {
    // 01. 문자열 배열을 substr 메서드를 사용하여 s부터 l까지 자른다.
    //     다른 문제에서는 substr에 줄이 그어졌는데 해당 문제에서는 줄이 그어지지 않고 있다..
    // 02. 자른 문자열을 정수로 묵시적 형변환한 뒤 map 메서드를 사용하여 배열의 원소를 변경한다.
    // 03. filter 메서드를 사용하여 해당 요소가 k보다 큰 값들을 담은 배열만 반환한다.
    return intStrs
                .map(x => +(x.substr(s, l)))
                .filter(x => +x > k);
}