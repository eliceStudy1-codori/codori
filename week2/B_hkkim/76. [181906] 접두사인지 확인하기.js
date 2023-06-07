function solution(my_string, is_prefix) {
  // substring 으로 is_prefix의 길이만큼 자른 후, is_prefix와 동일하면 1 반환, 그렇지 않으면 0 반환
  return my_string.substring(0, is_prefix.length) === is_prefix ? 1 : 0;
}
ß;
