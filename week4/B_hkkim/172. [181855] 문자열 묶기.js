function solution(strArr) {
    const newArr = Array(31).fill(0) // 배열의 길이가 30까지 제한되어 있으므로 길이가 31인 빈 배열을 생성하고 요소를 0으로 채움
    
    
    for (const str of strArr){ 
        newArr[str.length]++ // 해당 길이의 문자열이 나왔을때 1을 증가시킴
    }
    return Math.max(...newArr) // newArr의 요소중 길이가 가장 긴 값을 return함
}
