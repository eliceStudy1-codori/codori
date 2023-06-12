/**
 * 문제 설명
 * 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 
 * 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 
 * 매개변수로 주어질 때, todo_list에서 아직 마치지 못한 일들을 
 * 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한사항
 * 1 ≤ todo_list의 길이 1 ≤ 100
 * 2 ≤ todo_list의 원소의 길이 ≤ 20
 * todo_list의 원소는 영소문자로만 이루어져 있습니다.
 * todo_list의 원소는 모두 서로 다릅니다.
 * finished[i]는 true 또는 false이고 true는 todo_list[i]를 마쳤음을, 
 * false는 아직 마치지 못했음을 나타냅니다.
 * 아직 마치지 못한 일이 적어도 하나 있습니다.
 * 
 * 입출력 예
 * todo_list		
 * ["problemsolving", "practiceguitar", "swim", "studygraph"]	
 * finished
 * [true, false, true, false]	
 * result
 * ["practiceguitar", "studygraph"]
 * 
 * @param {Array} todo_list 문자열 배열 
 * @param {Array} finished boolean 배열
 * @returns 마치지 못한 일 배열
 */
function solution(todo_list, finished) {
    // 01. todo list 문자열 배열을 filter 메소드를 이용하여
    // 마치지 못한 요소만 배열로 반환한다.
    return todo_list.filter((_, i) => !finished[i]);
}