interface List {
    readonly id:number,
    name: string;
    // [x: string]: any;
    age?: number // 可选属性
}
interface Result{
    data: List[]
}
function render(result: Result){
    result.data.forEach((value) => {
        console.log(value.id,value.name);
        if(value.age){
            console.log(value.age);
        }
        // value.id ++ 
    })
}
let result = {
    data: [
        {id: 1,name: 'A', sex: 'male'},
        {id: 2,name: 'B'}
    ]
}
render(result);

// 定义的接口： 当我们传入数据多余定义，采用对象字面量直接传入则会报错。
// render({
//     data: [
//         {id: 1,name: 'A', sex: 'male'}, // error
//         {id: 2,name: 'B'}
//     ]
// })

// 绕过报错的三种方法
/**
 * 方法一： 将传入对象赋值给一个变量
 */
// let result = {
//     data: [
//         {id: 1,name: 'A', sex: 'male'},
//         {id: 2,name: 'B'}
//     ]
// }
// render(result);

/**
 * 方法二： 类型断言
 */
// render({
//     data: [
//         {id: 1,name: 'A', sex: 'male'}, // error
//         {id: 2,name: 'B'}
//     ]
// } as Result)

/**
 * 方法三： 类型断言(方法二)
 */
// render(<Result>{
//     data: [
//         {id: 1,name: 'A', sex: 'male'}, // error
//         {id: 2,name: 'B'}
//     ]
// })

/**
 * 方法三：在接口设置[x: string]: any;
 */


// 可选属性
// age?: number 
// 只读属性
// readonly id:number

// 可索引类型的接口： 当你不确定一个接口中有多少个数据的时候使用
interface StringArray {
    // 相当于声明了一个字符串数组
    [index:number]:string
}
let chars: StringArray = ['A','B']

interface Names {
    [x:string]: string
    // 混用 : 数字签名返回值一定要是字符串索引签名的子类型
    [z:number]: string
}
