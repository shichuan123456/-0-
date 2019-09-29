/* 
  通过==比较时，如果类型不一致会自动进行类型转换，规则如下：
  1、If x is Number and y is String, return x == ToNumber(y)
  2、If x is String or Number and y is Object, return x == ToPrimitive(y)
*/

console.log(0 == "0") // true 0 == Number("0")
console.log(0 == []) // true 0 == Number([].toString())
console.log("0" == []) //false "0" == [].toString()


// 引用 https://github.com/reng99/blogs/issues/43
