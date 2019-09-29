# js数据类型
## 分类
  ### 基本数据类型
    Undefined Null String Boolean Number Symbol
    #### Undefined
    变量提升 
    执行上下文分为：创建阶段、执行阶段。
    #### Null
    一个空对象指针
    undefined值派生自null值。
    ### String
    ### Boolean
    ### Number
      let a = 13.04;
      let b = 2.5;
      console.log(a * b);    // 32.599999999999994
      (a * 100 * (b * 10))/1000
    ### Symbol
  ### 引用数据类型 
    Object、Array、RegExp、Date、Function、特殊的基本包装类型(String、Number、Boolean)以及单体内置对象(Global、Math)
    上面的基本类型是通过基本包装类型来创建的
## 类型判断
  Object.prototype.toString.call(obj)
  
