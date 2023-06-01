function solution(arr, k) {
    var answer = [];
    if (k % 2 !== 0) { //k가 홀수 일때
        answer = arr.map(num => num * k);//배열의 요소에 대한 연산을 위해 map()매서드를 사용합니다. num(arr)에 k를 곱합니다.
    } else { // 이외의 경우 (짝수라면)
        answer = arr.map(num => num + k); // num에 k를 더합니다.
    }
    return answer;
}