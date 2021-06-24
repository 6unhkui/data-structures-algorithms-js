function solution(a, b, c) {
  let answer = a;
  if (a > b) answer = b;
  if (answer > c) answer = c;

  return answer;
}

module.exports = solution;
