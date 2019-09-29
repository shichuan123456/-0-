/* call的简单实现 */
Function.prototype.call = function (context, ...args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

/* apply的简单实现 */
Function.prototype.apply = function (context, arr) {
  context = context || window;
  context.fn = this;
  arr = arr || [];
  const result = context.fn(...arr);
  delete context.fn;
  return result;
}

/* bind的简单实现 */
Function.prototype.bind = function (context, ...args) {
  var fn = this;
  return function () {
    fn.call(context, ...args, ...arguments);
  }
}



// 代码引用于 https://github.com/reng99/blogs/issues/29
