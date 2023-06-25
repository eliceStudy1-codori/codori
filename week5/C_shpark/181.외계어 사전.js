/*
외계어 사전
문제 설명
PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
2 ≤ spell의 크기 ≤ 10
spell의 원소의 길이는 1입니다.
1 ≤ dic의 크기 ≤ 10
1 ≤ dic의 원소의 길이 ≤ 10
spell의 원소를 모두 사용해 단어를 만들어야 합니다.
spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다.
dic과 spell 모두 중복된 원소를 갖지 않습니다.
입출력 예
spell	dic	result
["p", "o", "s"]
["sod", "eocd", "qixm", "adio", "soo"]	
2
["z", "d", "x"]	
["def", "dww", "dzx", "loveaw"]	
1
["s", "o", "m", "d"]	
["moos", "dzx", "smm", "sunmmo", "som"]	
2
*/
function solution(spell, dic) {
    //spell 배열을 알파벳순으로 나열하고 문자열로.
    let spellsort = spell.sort().join('');
    //dic도 map메소드로 똑같이 만들고, find메소드로 일치하는게 있는가 확인 후 출력.
    let result = dic.map(a => a.split('').sort().join('')).find(a => a === spellsort) ? 1 : 2;
    
    return result;
  }