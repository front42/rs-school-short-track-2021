/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let stack = [];
  let result = '';
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    stack.push(strArr[i]);
    if (strArr[i + 1] !== stack[stack.length - 1]) {
      if (stack.length > 1) {
        result += stack.length + stack[stack.length - 1];
        stack = [];
      } else {
        result += stack[stack.length - 1];
        stack = [];
      }
    }
  } return result;
}

module.exports = encodeLine;
