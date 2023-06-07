function solution(my_string, is_suffix) {
  // slice를 이용해 접미사의 길이만큼 뒤에서부터 잘라내고, 잘라낸 문자열이 접미사라면 1을, 아니면 0을 return함
  return Number(
    my_string.slice(my_string.length - is_suffix.length) === is_suffix
  );
}
