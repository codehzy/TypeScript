// 函数定义
function add1(x:number,y:number){
    return x + y;
}

// 通过一个变量来定义函数类型
let add2:(x: number, y: number) => number;

// 通过类型别名
type add3 = (x: number,y: number) => number

// 通过接口来定义
interface add4 {
    (x: number,y: number): number
}

// TS中形参和实参必须一一对应
// add1(1,2);

// 可选参数： 可选参数必须要位于必选参数后
function add5(x:number,y?: number){
    return y? x + y : x;
}
add5(1)

function add6(x: number,y = 0,z: number, q = 1){
    return x + y + z + q;
}
console.log(add6(1,undefined,3));

// 参数不确定
function add7(x: number,...rest: number[]){
    return x + rest.reduce((pre, cur) => pre + cur);
}
console.log(add7(1,2,3,4,5,6));

// 函数重载： 两个函数名，但是参数的个数和参数的类型不同。
// 函数重载的好处： 不用因为相似功能的函数，选择不同的函数名称。
function add8(...rest:number[]): number;
function add8(...rest:string[]): string;
function add8(...rest:any[]): any {
    // 判断第一个参数类型
    let first = rest[0];
    if(typeof first === 'string'){
        return rest.join('')
    }
    if(typeof first === 'number'){
        return rest.reduce((pre,cur) => pre + cur);
    }
}

console.log(add8(1,2,3,4,5,6));
console.log(add8('1','2','3'));
