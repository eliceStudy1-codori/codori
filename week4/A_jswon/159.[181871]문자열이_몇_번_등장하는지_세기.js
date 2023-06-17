/**
 * 문제 설명
 * 문자열 myString과 pat이 주어집니다. 
 * myString에서 pat이 등장하는 횟수를 
 * return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 1 ≤ myString ≤ 1000
 * 1 ≤ pat ≤ 10
 * 
 * 입출력 예
 * myString	    pat	    result
 * "banana"	    "ana"	    2
 * "aaaa"	    "aa"	    3
 * 
 * @param {String} myString 문자열
 * @param {String} pat 문자열
 * @returns 
 */
function solution(myString, pat) {
    // 01. 횟수를 저장하기 위한 변수를 선언한다.
    let answer = 0;
    // 02. pat의 길이를 저장한다.
    let patLength = pat.length;
    // 03. for loop를 수행하여 loop 내에서 로직을 처리한다.
    for(let i=0; i<myString.length; i++) {
        // 04. 문자열을 인덱스 위치부터 pat의 길이만큼 자른다.
        let str = myString.substr(i, patLength);
        // 04-1. vscode에서는 substr에 줄이 그어졌다. substring을 사용하면 다음과 같다.
        // let str = myString.substring(i, i + patLength);
        
        // 05. 자른 str이 pat에 존재한다면 pat이 등장한 것이므로 횟수를 증가시킨다.
        if(str.indexOf(pat) > -1) answer++;
    }
    // 06. 횟수를 반환한다.
    return answer;
}