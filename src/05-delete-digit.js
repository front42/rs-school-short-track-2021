/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stack = [];
  let working = String(n).split('');
  for (let i = 0; i < working.length; i++) {
    working.splice(i, 1);
    stack.push(working.join(''));
    working = String(n).split('');
  }
  stack.sort((a, b) => a - b);
  return Number(stack[stack.length - 1]);
}

module.exports = deleteDigit;
