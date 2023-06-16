/*문제 설명
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ i < j ≤ 100,000
0 ≤ k ≤ 9
입출력 예
i	j	k	result
1	13	1	6
10	50	5	5
3	10	2	0*/
function solution(i, j, k) {
    let result = 0;
    for (let n = i; n <= j; n++) {
        //i부터 j까지 문자열로 나열하고 split으로 나누어줍니다.
        let digits = String(n).split('');
        //for..of루프로 digits의 요소를 하나씩 순회하도록 합니다.
        for (let num of digits) {
            //요소들 중 k와 동일한 숫자가 있다면 카운트합니다.
            if (Number(num) === k) {
                result++;
            }
        }
    }
    return result;
}
/*더 쉬운 풀이법
let a ='';
    for(i;i<=j;i++){
        a += i;
    }
    return a.split(k).length-1;
}
*/