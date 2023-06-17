/**
 * 문제 설명
 * 문자열 s가 매개변수로 주어집니다. 
 * s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 
 * return 하도록 solution 함수를 완성해보세요. 
 * 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
 * 
 * 제한사항
 * 0 < s의 길이 < 1,000
 * s는 소문자로만 이루어져 있습니다.
 * 
 * 입출력 예
 * s	        result
 * "abcabcadc"	"d"
 * "abdc"	    "abcd"
 * "hello"	    "eho"
 * 
 * @param {String} s 영어 소문자로만 구성된 문자열 
 * @returns s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열,
 *          한 번만 등장하는 문자가 없을 경우 "" 반환
 */
function solution(s) {
    // 01. 입력받은 문자열을 한 문자씩 원소를 담은 배열로 변경한다. 
    let arr = [...s];
    // 02. 문자를 담을 객체를 선언한다.
    let obj = {};
    // 03. forEach 메서드를 사용하여 loop를 수행한다.
    arr.forEach(x => {
        // 04. 객체에 값이 존재하지 않으면 해당 key를 객체에 value 1을 할당한다.
        if(!Object.keys(obj).includes(x)) obj[x] = 1;
        // 05. 객체에 값이 존재하면 해당 key에 대한 value를 1씩 증가시킨다.
        else obj[x]++;
    });
    // 06. filter 메서드를 사용하여 key에 대한 value가 1인 값만 필터링한다.
    // 07. 문자 순서대로 오름차순 정렬하고, join 메서드를 사용하여 문자열로 변환 후 반환한다.
    return Object.keys(obj).filter(x => obj[x] === 1).sort().join('');
}