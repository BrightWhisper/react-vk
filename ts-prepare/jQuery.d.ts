// 这是一个jQuery的声明文件
// 声明文件必须以.d.ts结尾
// ts会解析所有的.d.ts文件，所以只要写一处，项目中就都会获得响应的类型定义
// https://www.typescriptlang.org/dt/search?search=
// 上面的网址可以查找所有的@types文件,来获取第三方库的类型定义文件
declare const jQuery: (selector: string) => any
 