// 泛型类
// 注意： 泛型不能应用于类的静态成员 static 
class SelfLog<T> {
    run(value:T){
        console.log(value);
        return value;
    }
}

// 指定number
let log1 = new SelfLog<number>();
log1.run(1)
// 不指定则为any
let log2 = new SelfLog();
log2.run({a:1})


// 类型约束 - 约束泛型
// 预定义接口来约束泛型
interface Length {
    length: number
}

function MYLog<T extends Length>(value: T):T {
    console.log(value,value.length);
    return value
}
MYLog([1])
MYLog('123');
MYLog({ length: 1})


// 泛型好处
/**
 * 1. 函数和类可以轻松支持多种类型，增强程序的扩展性
 * 2. 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
 * 3. 灵活控制类型之间的约束
 */