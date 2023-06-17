/**
 * 문제 설명
 * 임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 
 * 구분자로 사용해 문자열을 나누고자 합니다.
 * 예를 들어 주어진 문자열이 "baconlettucetomato"라면 
 * 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.
 * 문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 
 * 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, 
 * return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.
 * 
 * 제한사항
 * 1 ≤ myStr의 길이 ≤ 1,000,000
 * myStr은 알파벳 소문자로 이루어진 문자열 입니다.
 * 
 * 입출력 예
 * myStr	                    result
 * "baconlettucetomato"	    ["onlettu", "etom", "to"]
 * "abcd"	                    ["d"]
 * "cabab"	                    ["EMPTY"]
 * 
 * @param {String} myStr 문자열 
 * @returns 조건에 의하여 나눠진 문자 배열
 */
function solution(myStr) {
    // 01. 입력받은 문자열에서 a,b,c가 들었을 경우 해당 문자를 공백으로 변환한다.
    // 02. 해당 문자열의 앞 뒤 공백을 제거하고, split 메서드를 사용하여 공백 기준으로 배열로 변환한다.
    // 03. filter 메서드를 사용하여 falsy한 값을 제거한다. 여기서는 빈 문자열을 의미한다.
    let data = myStr.replace(/[a|b|c]/g, " ").trim().split(' ').filter(x => x);
    // 04. data의 길이가 0보다 크다면 데이터가 있는 경우이므로 해당 배열을 반환하고,
    //     그렇지 않은 경우에는 빈 배열이므로 ["EMPTY"]를 반환한다.
    return data.length ? data : ["EMPTY"]
}


/*
    Falsy한 값은 JavaScript에서 다음과 같은 값들을 의미합니다:

    false: 불리언 값인 false
    null: null 타입의 값
    undefined: undefined 타입의 값
    0: 숫자 0
    -0: 음의 숫자 0
    NaN: 숫자가 아님을 나타내는 값
    '' 또는 "": 빈 문자열
*/