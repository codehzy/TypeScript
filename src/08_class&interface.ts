// 一个接口可以约束一个类成员有哪些属性
// 接口只能约束类的公有成员,接口不能约束类的构造函数
// 接口继承，一个接口可以继承多个接口。接口还可以继承类
interface Human {
    // new (name: string): void;
    name: string;
    eat(): void;
}

// 类实现接口时候，必须实现接口的所有属性
class Asian implements Human {
    constructor(name: string){
        this.name = name;
    }
    name: string
    eat(){}
    sleep(){}
}

interface Man extends Human {
    run(): void
}

interface Child{
    cry(): void
}

// 接口继承多个接口
interface Boy extends Man,Child {}
let boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
}

// 接口继承类
class Auto {
    state = 1
    private state2 = 0
}
interface AutoInterface extends Auto {

}
// error : 类型 "C" 中缺少属性 "state2"，但类型 "AutoInterface" 中需要该属性。
// class C implements AutoInterface{
//     state = 1
// }

// Atuo的子类Bus，以为Bus是Auto的子类，所以不用定义state
class Bus extends Auto implements AutoInterface {

}

class Hello extends Auto {

}

/**
 * 1. 接口之间可以相互继承，实现接口的复用
 * 2. 类之间可以相互继承，实现方法和属性的复用
 * 3. 接口可以通过类来实现，接口只能约束类的公有成员
 * 4. 接口可以抽离类的成员，抽离的包括类的public private protected
 */