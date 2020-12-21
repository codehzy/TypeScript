// 抽象类： 只能被继承不能被实例化的类
// 抽象类的好处： 抽离出事物的共性
abstract class Animal {
    eat() {
        console.log('eat');
    }
    abstract sleep(): void
}

// let animal = new Animal(); //无法创建抽象类的实例。

class Cat extends Animal {
    constructor(name: string) {
        super()
        this.name = name;
    }
    name: string
    run(){}
    sleep(){
        console.log('dog sleep');
    }
}

let cat = new Cat('wangwang');
cat.eat();
cat.sleep(); 

// 多态：在父类中定义一个抽象方法，在多个子类中对这个方法有不同实现
class Fish extends Animal {
    sleep(){
        console.log('fish sleep');
    }
}
let fish = new Fish;

// 实现多态： 在程序时，会判断执行的实例是哪个实例，然后自动选择方法
let animals: Animal[] = [cat,fish];
animals.forEach(i => {
    i.sleep()
})

// this： 类的成员方法可以返回this，实现链式调用
class WorkFlow{
    step1(){
        return this;
    }
    step2(){
        return this;
    }
}
new WorkFlow().step1().step2();

// 在继承的时候，this类型也可以表现成多态，这里的多态指的是this即可以是父类型也可以是子类型
class Myflow extends WorkFlow{
    next(){
        return this;
    }
}
new Myflow().next().step1().next().step2();