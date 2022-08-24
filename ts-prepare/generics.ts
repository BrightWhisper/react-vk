// 泛型
// 泛型是指的在定义接口和函数的时候，不预先指定应有的类型，而是在使用的时候再指定类型
function echo<T>(arg: T): T {
  return arg
}
const result = echo("str")

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result1 = swap([1, "lilimi"])

function echoWithArr<T>(arg: Array<T>): Array<T> {
  console.log(arg?.length)
  return arg
}

echoWithArr([1, 2, 3, 4])

// 约束泛型,规定泛型变量实现了某接口，这里是限定必须有length属性
// 这里也体现了duck typing的说法，只要包含length属性，本身是什么类型不重要
interface WithLength {
  length: number
}

function echoWithLength<T extends WithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str = echoWithLength("str")
const ags = echoWithLength([1, 2, 3, 5])
const obj = echoWithLength({ length: 1, width: 10 })

// 泛型在类中的应用
class Queue<T> {
  private data: Array<T> = []
  push(item: T) {
    return this.data.push(item)
  }
  pop() {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(234)
queue.pop()
const queue2 = new Queue<string>()
queue2.push("b")
queue2.pop()

// 泛型在接口中的应用
interface KeyPari<T, U> {
  key: T
  value: U
}
let key1: KeyPari<number, string> = { key: 2, value: "a" }
let key2: KeyPari<string, number> = { key: "b", value: 3 }