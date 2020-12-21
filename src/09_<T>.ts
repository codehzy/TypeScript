// 泛型
// 很多时候我们希望一个函数或者一个类可以支持多种类型

// 一个打印函数
// function log(value:string): string {
//     console.log(value);
//     return value;
// }

// 需求: 希望这个函数能够接受一个字符串数组
// 函数重载
// function log(value: string): string;
// function log(value: string[]): string[];
// function log(value: any){
//     console.log(value);
//     return value;
// }

// 联合类型
// function log(value: string | string[]):string | string[] {
//     console.log(value);
//     return value;
// }

// 需求更近一步
// any类型: 缺点：丢失了类型之间的约束关系，忽略的输入参数的类型和函数返回值需要一直的
// 此时需要用泛型
// function log(value:any){
//     console.log(value);
//     return value;
// }

// 泛型: 不预先确定的数据类型，具体的类型在使用的时候才能确定
function log<T>(value: T):T {
    console.log(value);
    return value;
}
// 两种调用方式
log<string[]>(['a','b'])
log(['a','b']);// 类型推断

// 使用泛型定义函数类型,去掉函数名称
// type Log = <T>(value: T) => T
// let myLog: Log = log;

// 泛型接口
// interface Log {
//     <T>(value:T): T
// } 

// 使用泛型来约束接口的其他成员，接口的所有成员都可以收到泛型的约束
// 注意点:当泛型对象约束了接口的时候，我们使用的时候必须指定一个类型
// interface Log<T> {
//     (value:T): T
// }
// let myLog: Log<number> = log;
// myLog(1)

// ||或者

interface Log<T = string> {
    (value:T): T
}
let myLog: Log= log;
myLog("2");