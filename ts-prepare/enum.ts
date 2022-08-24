// 枚举
// 枚举就像一个双向绑定的元素，可以通过key取到响应的索引
// 也可以像数组一样通过索引取到key的值

// 数字枚举
enum Direction {
    Up = 10,
    Down,
    Left,
    Right
}
console.log(Direction.Up)
console.log(Direction[10])

// 字符串枚举
enum Direction2 {
    Up = 'Ue',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2.Up)

// 常量枚举
// 使用常量枚举可以提升性能
const enum Direction3 {
    Up = 'Ue',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction3.Up)

