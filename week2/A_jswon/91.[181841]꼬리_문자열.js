/**
 * 문제 설명
 * 문자열들이 담긴 리스트가 주어졌을 때, 
 * 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다. 
 * 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다. 
 * 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 
 * 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.
 * 문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때, 
 * str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 2 ≤ str_list의 길이 ≤ 10
 * 1 ≤ str_list의 원소의 길이 ≤ 10
 * 1 ≤ ex의 길이 ≤ 5
 * 
 * 입출력 예
 * str_list	                 ex	     result
 * ["abc", "def", "ghi"]	"ef"	"abcghi"
 * ["abc", "bbc", "cbc"]	"c"	       ""
 * 
 * @param {Array} str_list 문자열 배열 
 * @param {String} ex 문자열
 * @returns 특정 문자열이 포함된 배열 요소를 제거한 뒤 만든 문자열
 */ 
function solution(str_list, ex) {
    // 1. 문자열 배열(str_list)에서 특정 문자열(ex)를 포함하지 않는
    //    요소들만 filter 메소드를 사용하여 반환하여 배열로 반환한다.
    // 2. join 메소드를 사용하여 문자열로 반환한다.
    return str_list.filter(x => !x.includes(ex)).join('');
}