// interface 对类进行抽象，对对象的形状做描述，同时也叫Duck Typing
// 是一种类型的推断策略

// readonly属性是希望只在创建的时候赋值，之后不能够再赋值了
interface Person {
  name: string
  age?: number
}

let vk: Person = {
  name: "viking",
  age: 20,
}
vk.name = "bb"
vk.age = 23

let vq: Person = {
  name: "3",
}

// interface也可以用implements，限定类的属性和方法
interface Radio {
  switchRadio(trigger: boolean): void
}

interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void
}
class Car implements Radio {
  switchRadio(trigger: boolean): void {}
}

class CellPhone implements RadioWithBattery {
  switchRadio(trigger: boolean): void {}
  checkBatteryStatus(): void {}
}

// interface描述函数的类型
interface Plus<T> {
  (a: T, b: T): T
}
function plus(a: number, b: number): number {
  return a
}

const a: Plus<number> = plus

function connect(a: string, b: string): string {
  return a + b
}
const b: Plus<string> = connect
