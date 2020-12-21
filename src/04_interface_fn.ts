let Add: (x:number,y:number) => number

// interface Add{
//     (x:number,y:number): number
// }

// 类型别名
type Add = (x:number,y:number) => number
// 具体的函数
let add: Add = (a,b) => a + b;

// 混合类型接口 ： 一个接口既可以定义一个函数 也可以向对象一样拥有属性和方法
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib(){
    let lib: Lib = (() => {}) as Lib;
    lib.version = '1.0';
    lib.doSomething = () => {}    
    return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib; 

