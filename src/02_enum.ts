// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role.Reporter); // 0
console.log(Role.Developer); // 1
console.log(Role); // 枚举类型的变量 -> key ,枚举的值 -> value


// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}
// Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
// 字符串枚举没有映射

// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员

// Role.Reporter = 2 error 枚举只读
enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // computed : 必须要有初始值
    d = Math.random(),
    e = '123'.length
}


// 常量枚举: 当我们不需要一个变量，但是需要一个变量的值
const enum Month{
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan,Month.Feb,Month.Mar]; // let month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];


// 枚举类型
enum E {a,b}
enum F {a = 0, b = 1}
enum G { a = 'apple' , b = "banana"}

let e:E = 3
let f:F = 3
// e === f // error

let e1: E.a
let e2: E.b
// e1 === e2 //error: 不同枚举类型

let e3:E.a = 1;
e1 = e3;
// e1 === e3 相同类型，可以枚举

let g1:G = G.b;
let g2:G.a = G.a;

