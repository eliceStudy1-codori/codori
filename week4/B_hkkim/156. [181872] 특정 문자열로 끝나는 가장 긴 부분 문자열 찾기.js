function solution(myString, pat) {
    let result = '';
    // lastIndexOf 를 사용해 인덱스를 역순으로 탐색해서 최초로 마주치는 인덱스를 반환하고, 그 값에 pat의 길이를 더함
    let last = myString.lastIndexOf(pat) + pat.length;

    result = myString.substr(0, last);

    return result;
}