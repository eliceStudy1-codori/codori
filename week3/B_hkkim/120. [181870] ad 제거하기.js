function solution(strArr) {
  // filter를 사용해 ad를 포함하지 않는 문자열을 필터링해 ad를 포함하지 않는 모든 문자열만 배열에 담아서 반환함
  return strArr.filter((str) => !str.includes("ad"));
}
