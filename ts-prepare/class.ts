// 权限修饰符有public,private,protacted，readonly
// public指的是外部可随意访问，private指的是类的外部都不可以访问，protacted指的是只有子类可以访问
// readonly修饰符指的是属性只能读，但不能修改

class Animal {
  // 静态属性和类的实例无关，和类本身有关 
  static categories: Array<string> = ['mammal','bird']
  // 静态方法同样
  static isAnimal(a:any){
    return a instanceof this
  }
  public name: string
  constructor(name: string) {
    this.name = name
  }
  public run() {
    return `${this.name} is running`
  }
}
 

const snake = new Animal("lily")
snake.name = "pikachu"
console.log(snake.run())
console.log(Animal.categories)
console.log(Animal.isAnimal(snake))

// 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}
const bao = new Dog("bao")
console.log(bao.run())
console.log(bao.bark())

// 方法重写(多态)
class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }

  run() {
    return "meow! " + super.run()
  }
}

const maomao = new Cat("maomao")
console.log(maomao.run())