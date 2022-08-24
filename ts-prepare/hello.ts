const hello = (name: string) => {
  return `hello ${name}`
}

hello('baki')

let isDone: boolean = true
let age: number = 20
let binaryNumber: number = 0b111
let firstName: string =  'vk'
let message: string = 'hello boy'

// number和null的区别
// 用Number转换undefined结果是NaN,转换null结果是0
let u:undefined = undefined
let n: null = null

// undefined和null是任意类型的子类型? 好像后面也不能赋值了
// 联合类型的例子
let ss: number | undefined | null = null

// 数组(ts中的数组，元素类型是均一的)
let arr: number[] = [1,2,3,4]
// 复习一下，类数组和数组最大的区别是没有数组的原型
// IArguements HTMLCollection NodeList 都是类数组的

// Tuple元组，其实就是可以有不同类型元素的数组
let user: [string, number] = ['ep', 1]






