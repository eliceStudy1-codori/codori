function solution(my_string) {
    const answer = [];

    let sign = 1;
    for (const i of my_string.split(" ")) {
        if (i === "+") { // +일 경우 1을 할당함
            sign = 1;
        } else if (i === "-") { // -일 경우 -1을 할당함
            sign = -1;
        } else {
            answer.push(i * sign); // 기호가 아닐 경우 sign에 i를 곱한 값을 push함
        }
    }

    return answer.reduce((a,b) => a + b, 0); // answer의 요소들을 모두 더함
}