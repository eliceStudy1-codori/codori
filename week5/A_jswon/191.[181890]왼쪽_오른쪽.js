/**
 * 문제 설명
 * 문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 
 * 여러 개 저장되어 있습니다. 
 * str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 
 * 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 
 * 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 
 * 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 
 * return하도록 solution 함수를 완성해주세요. 
 * "l"이나 "r"이 없다면 빈 리스트를 return합니다.
 * 
 * 제한사항
 * 1 ≤ str_list의 길이 ≤ 20
 * str_list는 "u", "d", "l", "r" 네 개의 문자열로 이루어져 있습니다.
 * 
 * 입출력 예
 * str_list	                result
 * ["u", "u", "l", "r"]	    ["u", "u"]
 * ["l"]	                []
 * 
 * @param {Array} str_list 문자열 배열
 * @returns 
 */
function solution(str_list) {
    // 01. 반환할 배열 초기화
    let answer = [];
    // 02. for loop 수행한다.
    for(let i=0; i<str_list.length; i++) {
        // 03. 'l'이 먼저 있을 경우, 배열에 0부터 i까지의 데이터를 잘라 할당하고, for문을 종료한다.
        if(str_list[i] === 'l') {
            answer = str_list.slice(0, i);
            break;
        }
        // 04. 'r'이 먼저 있을 경우, 배열에 r이 있던 인덱스부터 부터 끝까지 데이터를 잘라 할당하고, for문을 종료한다.
        else if(str_list[i] === 'r') {
            answer = str_list.slice(i+1);
            break;
        }
    }
    // 05. 배열을 반환한다.
    return answer;
}