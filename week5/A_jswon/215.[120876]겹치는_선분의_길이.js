

/*
function solution(lines) {
    // 01. 선분 3개 구조분해할당으로 받아놓고
    // 02. a랑 b, b랑 c, a랑 c의 겹치는 구간을 딴다
    // 03. 겹치는거 길이 반환한다.
    let len = 0;
    let [a, b, c] = lines;
    let arr1 = [Math.max(a[0], b[0]), Math.min(a[1], b[1])];
    let arr2 = [Math.max(b[0], c[0]), Math.min(b[1], c[1])];
    let arr3 = [Math.max(a[0], c[0]), Math.min(a[1], c[1])];

    let resultArr1 = arr1[0] < arr1[1] ? Array(arr1[1]-arr1[0]+1).fill().map((x, i) => arr1[0] + i) : [];
    let resultArr2 = arr2[0] < arr2[1] ? Array(arr2[1]-arr2[0]+1).fill().map((x, i) => arr2[0] + i) : [];
    let resultArr3 = arr3[0] < arr3[1] ? Array(arr3[1]-arr3[0]+1).fill().map((x, i) => arr3[0] + i) : [];

    let result = [resultArr1, resultArr2, resultArr3].flat();
    const set = new Set(result);
    const uniqueArr = [...set];
    return uniqueArr.length ? uniqueArr.length - 1 : 0;
}
*/