/**
 * 문제 설명
 * 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
 * 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
 * 두 분수를 더한 값을 기약 분수로 나타냈을 때 
 * 분자와 분모를 순서대로 담은 배열을 return 하도록 
 * solution 함수를 완성해보세요.
 * 
 * 제한사항
 * 0 <numer1, denom1, numer2, denom2 < 1,000
 * 
 * 입출력 예
 * numer1	denom1	numer2	denom2	result
 * 1	      2	      3	      4	    [5, 4]
 * 9	      2	      1	      3	    [29, 6]
 * 
 * @param {Number} numer1 분자1
 * @param {Number} denom1 분모1
 * @param {Number} numer2 분자2
 * @param {Number} denom2 분모2
 * @returns 분수 덧셈 결과
 */
function solution(numer1, denom1, numer2, denom2) {
    // 01. 반환할 배열 선언
    let answer = [];
    // 02. 최소공배수를 구한다.
    let lcm = getLcm(denom1, denom2);
    // 03. 최소공배수에 각각의 분모를 나눈 값을 저장한다.
    let aNum = lcm / denom1;
    let bNum = lcm / denom2;
    // 04. 분수 1,2를 map 메서드를 사용해서 각각의 분모를 나눈 값을 곱한다.
    let a = [numer1, denom1].map(x => x * aNum);
    let b = [numer2, denom2].map(x => x * bNum);
    // 05. 배열의 0번째 인덱스는 분자이므로 분자값을 더해주고, 최소공배수를 분모로 둔다.
    answer = [a[0]+b[0], lcm];
    
    // 06. 구한 배열 데이터에서 최대공약수를 구한다.
    let gcd = getGcd(answer[0], answer[1]);
    
    // 07. 최대공약수가 1보다 크다면 약분을 하여 기약분수로 만들어야 한다.
    if(gcd > 1) {
        // 07-1. 최대공약수로 각각 나눠준다.
        answer = [answer[0] / gcd, answer[1] / gcd];
    }

    // 08. 최종 값을 반환한다.
    return answer;
}

/**
 * 최대공약수를 구한다.
 * @param {Number} num1 정수1
 * @param {Number} num2 정수2
 * @returns 최대공약수
 */
function getGcd(num1, num2) {
    // 01. 입력받은 두 정수에서 더 작은 값을 변수로 선언하고, 
    //     1씩 감소시키며 두 정수의 공약수를 찾는다.
    for(let gcd = Math.min(num1, num2); gcd>=1; gcd--) {
        if(num1 % gcd == 0 && num2 % gcd == 0) {
            return gcd;
        }
    }
    return 1;
}

/**
 * 최소공배수를 구한다.
 * @param {Number} num1 정수1
 * @param {Number} num2 정수2
 * @returns 최소공배수
 */
function getLcm(num1, num2) {
    // 01. 공배수로 1을 선언한다.
    let lcm = 1;
    while(!(lcm % num1 == 0 && lcm % num2 == 0)) {
        // 02. 1씩 증가시키며 두 정수의 공배수를 찾는다.
        lcm++;
    }
    return lcm;
}