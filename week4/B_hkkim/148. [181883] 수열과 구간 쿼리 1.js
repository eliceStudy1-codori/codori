function solution(arr, queries) {
    for (const query of queries){
        const [s, e] = [query[0], query[1]]   // query의 요소 값을 담음
        for (let i=s; i<=e; i++){ // 반복문을 사용해서 arr 배열의 해당 인덱스 값을 1 증가시킴
            arr[i] ++
        }
    }
    return arr
}
