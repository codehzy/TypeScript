// 基本类: 
/**
 * 类成员的属性都是实例属性，不在原型上
 * 类成员你的方法都是实例方法
 * 实例的属性必须具有初始值，或者在构造函数中被初始化
 */
class Dog {
    constructor(name: string) {
        // this.name = name;
    }
    public name?: string = 'hello'
    private run() {}
    protected pro() {}
    readonly legs: number = 4
    static food: string = 'bones'
} 
console.log(Dog.prototype);
let dog = new Dog('wangwang'); // 06_class.ts:14 {run: ƒ, constructor: ƒ}
console.log(dog); // Dog {name: "wangwang"}


/**
 * 类的继承
 */
class Husky extends Dog {
    constructor(name: string,color: string) {
        // super代表父类的实例
        super(name)
        // this 一定要在super调用之后再调用
        this.color = color
    }
    // 子类自己的属性
    color: string
}

/**
 * 类的成员修饰符: 
 * public : 所有人都可见
 * private : 私有成员只能在类的本身调用，不能被类的实例或者子类调用。给构造函数设置，那么类不可被实例化或者继承
 * protected: 受保护成员，只能在类或者子类中访问，不能在类的实例中访问。给构造函数设置，那么类不能被实例化但可以被继承
 * readonly: 只读属性不可被更改，一定要被初始化
 * static: 类的静态成员,只能通过类名来调用，不能通过子类来调用，但可以被继承
 * 
 * 构造函数的参数也可以加修饰符
 */