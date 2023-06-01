/**
 * 0~90 예각 90 직각 90~180 둔각 180 평각
 * @param {각도} angle 
 * @returns 예각 1, 직각 2, 둔각 3, 평각 4 반환
 */
function solution(angle) {
    // 1. 삼항연산자 반복하여 붙인다.
    return angle === 180 ? 4 : angle > 90 ? 3 : angle === 90 ? 2 : 1;
}