/*
l로 만들기
문제 설명
알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ myString ≤ 100,000
myString은 알파벳 소문자로 이루어진 문자열입니다.
입출력 예
myString	result
"abcdevwxyz"	"lllllvwxyz"
"jjnnllkkmm"	"llnnllllmm" 
*/
function solution(myString) {
    //map메소드와 삼항연산자로 l보다 앞서는 모든 문자를 l로 바꿔주었습니다.
    //join메소드를 사용하여 문자열로 결합하였습니다.
    return [...myString].map(a => a < 'l' ? 'l' : a).join('');
}
//replace함수와 정규표현식 //g로 더 간단히 출력할 수 있었습니다.
/*  function solution(myString) {
    return myString.replace(/[a-k]/g,'l');
    }
*/