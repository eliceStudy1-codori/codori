/**
 * 문제 설명
 * 알파벳으로 이루어진 문자열 myString이 주어집니다. 
 * 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 1 ≤ myString의 길이 ≤ 100,000
 * myString은 알파벳으로 이루어진 문자열입니다.
 * 
 * 입출력 예
 * myString	    result
 * "aBcDeFg"	"abcdefg"
 * "aaa"	    "aaa"
 * 
 * @param {String} myString 문자열
 * @returns 소문자로 변환한 문자열
 */
function solution(myString) {
    // 01. toLowerCase 메서드를 사용하여 모든 알파벳을 소문자 알파벳으로 변환한다.
    return myString.toLowerCase();
}