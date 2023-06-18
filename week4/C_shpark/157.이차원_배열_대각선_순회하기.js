/*
문제 설명
2차원 정수 배열 board와 정수 k가 주어집니다.

i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ board의 길이 ≤ 100
1 ≤ board[i]의 길이 ≤ 100
1 ≤ board[i][j] ≤ 10,000
모든 board[i]의 길이는 같습니다.
0 ≤ k < board의 길이 + board[i]의 길이
입출력 예
board	k	result
[[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]]	2	8
입출력 예 설명
입출력 예 #1

입출력 예 #1의 board를 표로 나타내면 다음과 같습니다.
i \ j	0	1	2
    0	0	1	2
    1	1	2	3
    2	2	3	4
    3	3	4	5
i + j가 2보다 작거나 같은 항들의 합은 0 + 1 + 2 + 1 + 2 + 2 = 8이므로 8을 return 합니다.*/
function solution(board, k) {
    var answer = 0;
    //i(배열의 개수 확인)
    for (let i = 0; i < board.length; i++) {
        //j(배열 안 요소의 개수 확인)
      for (let j = 0; j < board[0].length; j++) {
        //i+j의 값 중에 k보다 작은 수 찾기
        if (i + j <= k) {
          answer += board[i][j];
        }
      }
    }
    return answer;
  }