function solution(numbers) {
    numbers.sort((a,b) => b-a) //sort()매서드를 사용해 배열에 순서를 만듭니다. 
    //((a,b) => b-a)는 a와 b 두 요소를 비교하여, b-a일 때 내림차순, a-b라면 오름차순으로 표시합니다. 
    
    return numbers[0] * numbers[1]; //내림차순으로 표시했기 때문에 [0]과 [1]이 배열에서 가장 큰 숫자 1,2가 됩니다.
}