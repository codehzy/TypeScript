// 原始类型
let bool: boolean = true;
let num: number | undefined | null = 123;
let str: string = "abc";


// 数组
let arr: number[] = [1,2,3];
let arr2: Array<number | string> = [1,2,3,'4']

// 元组: 特殊的数组 限定了数组的数据类型和个数
let tuple: [number,string] = [0,'12']
// 元祖的越界
tuple.push(2);// 实际开发中不建议使用
console.log(tuple); // [0, "12", 2]

// 函数
// let add = (x:number,y:number):number => x + y;
// 函数类型
let compute: (x:number,y:number) => number;
compute = (a,b) => a + b;

// 对象类型
let obj:{x:number,y:number} = {x:1,y:2};
obj.x = 3;

// Symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2); // false

// undefined，null
let un:undefined = undefined; // 一旦设置成undefined 只能赋值成undefined
let nu:null = null;
num = undefined;
num = null;

// void: 可以让任何表达式返回undefined
let noReturn = () => {}
(function (){
    var undefined = 0;
    console.log(undefined);
})()
// undefined


// any
let x
x = 1
x = []
x = () => {}

// never : 没有返回值的函数
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}