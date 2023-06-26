/**
 * 문제 설명
 * 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 
 * 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 
 * 담겨있는 배열 dots가 매개변수로 주어질 때,
 * 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 * dots의 길이 = 4
 * dots의 원소의 길이 = 2
 * -256 < dots[i]의 원소 < 256
 * 잘못된 입력은 주어지지 않습니다.
 * 
 * 입출력 예
 * dots	                                    result
 * [[1, 1], [2, 1], [2, 2], [1, 2]]	        1
 * [[-1, -1], [1, 1], [1, -1], [-1, 1]]	    4
 * 
 * @param {Array} dots 직사각형 네 꼭짓점의 좌표가 담겨있는 배열
 * @returns 직사각형의 넓이
 */
function solution(dots) {
    // 01. 입력받은 dots를 구조 분해 할당하여 저장한다.
    let [dot1, dot2, dot3, dot4] = dots;
    // 02. x좌표와 y좌표를 각각 저장한다.
    let arrX = [dot1[0], dot2[0], dot3[0], dot4[0]];
    let arrY = [dot1[1], dot2[1], dot3[1], dot4[1]];
    // 03. x,y좌표의 최댓값과 최솟값을 각각 구조분해 할당으로 저장한다.
    let [xmax, ymax] = [Math.max(...arrX), Math.max(...arrY)]
    let [xmin, ymin] = [Math.min(...arrX), Math.min(...arrY)]
    // 04. 최댓값에서 최솟값을 뺀 x축과 y축의 값을 곱하여 반환한다.
    return (xmax-xmin)*(ymax-ymin);
}