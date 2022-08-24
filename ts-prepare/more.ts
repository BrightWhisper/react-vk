// 类型别名
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x + y
}
const sum2: PlusType = sum

type resolver = () => string
type nameOrResolver = string | resolver
function getName(n: nameOrResolver): string {
  if (typeof n === "string") {
    return n
  } else {
    return n()
  }
}

// 类型断言
// 在遇到联合类型时，只能访问所有类型公用的属性和方法,此时就需要类型断言
function getLength(input: string | number): number {
  const str = input as String
  if (str.length) {
    return str.length
  } else {
    const number = input as number
    return (number + "").length
  }

  // 断言也可以用尖括号的形式
  //   if((<string>input).length){
  //     //......
  //   }
}

jQuery("#12345")
