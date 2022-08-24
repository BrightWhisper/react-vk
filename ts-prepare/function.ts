// 可选参数只能放在形参列表最后
const add = (x: number, y: number = 10, z?: number): number => {
  if (z) {
    return x + y + z
  } else {
    return x + y
  }
}

let result = add(2, 3)

const add2: (x: number, y: number, z: number) => number = add

// 类型推断
let str = 'str'
// 这里报错，因为已经推断了是个string类型
str = 3

