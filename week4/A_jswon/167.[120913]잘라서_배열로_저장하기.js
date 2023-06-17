/**
 * 문제 설명
 * 문자열 my_str과 n이 매개변수로 주어질 때, 
 * my_str을 길이 n씩 잘라서 저장한 배열을 
 * return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 1 ≤ my_str의 길이 ≤ 100
 * 1 ≤ n ≤ my_str의 길이
 * my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.
 * 
 * 입출력 예
 * my_str	            n	result
 * "abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
 * "abcdef123"	        3	["abc", "def", "123"]
 * 
 * @param {String} my_str 문자열
 * @param {Number} n 정수 매개변수
 * @returns my_str을 길이 n씩 잘라서 저장한 배열
 */
function solution(my_str, n) {
    // 01. 빈 문자열을 선언한다.
    let str = "";
    // 02. 빈 배열을 선언한다.
    let result = [];
    // 03. for loop를 수행한다.
    for(let i=0; i<=my_str.length; i+=n) {
        // 04. loop를 수행할 때마다 빈 문자열을 선언해 준다.
        str = "";
        // 05. my_str의 길이가 n보다 작을 경우 마지막 부분이므로
        //     i 인덱스부터 잘라서 str에 저장한다.
        if(my_str.length < n) {
            str = my_str.substr(i);
            // str = my_str.substring(i);
        }
        // 06. 그렇지 않을 경우 i 인덱스부터 n까지 잘라서 str에 저장한다.
        else {
            str = my_str.substr(i,n);
            // str = my_str.substring(i);
        }
        // 07. 해당 str을 배열에 추가한다.
        result.push(str);
    }

    // 08. filter 메서드를 사용하여 falsy한 값을 제거하고, 배열을 반환한다.
    return result.filter(x => x);
}