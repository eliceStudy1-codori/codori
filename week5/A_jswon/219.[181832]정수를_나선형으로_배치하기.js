/**
 * 문제 설명
 * 양의 정수 n이 매개변수로 주어집니다. 
 * n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 
 * 시계방향 나선형으로 배치한 이차원 배열을 
 * return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한사항
 * 1 ≤ n ≤ 30
 * 입출력 예
 * n	result
 * 4	[[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
 * 5	[[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
 * 
 * @param {Number} n 양의 정수
 * @returns 인덱스[0][0]부터 시계방향 나선형으로 배치한 이차원 배열
 */
function solution(n) {
    // 01. 반환할 2차원 배열에 0을 전부 채운다.
    let answer = Array.from(Array(n), () => new Array(n));
    // 02. 행, 열의 값(위치)을 선언한다.
    let row = 0;
    let col = -1;
    // 03. 행, 열의 회전 횟수 값을 저장한다.
    let rowD = n;
    let colD = n-1;
    // 04. for loop를 n의 제곱만큼 수행한다. loop 수행 데이터는 배열에 할당할 값이다.
    for(let i=1; i<=Math.pow(n,2); i++) {
        // 04-1. 오른쪽으로 움직일 때
        //       column이 colD보다 작을때 오른쪽으로 가는것
        if(row > col && rowD > colD) {
            for(let j=i; j<i+rowD; j++) {
                answer[row][++col] = j;
            }
            i += --rowD;
        }

        // 04-2. 아래쪽으로 움직일 때
        //       column이 최대일때 아래로 가는것
        else if(col > row) {
            for(let j=i; j<i+colD; j++) {
                answer[++row][col] = j;
            }
            i += --colD;
        }
        
        // 04-3. 왼쪽으로 움직일 때
        //       row가 최대일때 왼쪽으로 가는것
        else if(row == col) {
            for(let j=i; j<i+rowD; j++) {
                answer[row][--col] = j;
            }
            i += --rowD;
        }

        // 04-4. 위쪽으로 움직일 때
        //       row가 최대일때 위로 가는것
        else if(row > col && rowD == colD) {
            for(let j=i; j<i+colD; j++) {
                answer[--row][col] = j;
            }
            i += --colD;
        }
    }
    
    // 05. 배열을 반환한다.
    return answer;
}
