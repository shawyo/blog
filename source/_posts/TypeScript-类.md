---
title: TypeScript 类
date: 2019-01-22 10:27:59
tags: TypeScript
categories: TypeScript
keywords: ts,typescript,TypeScript
banner: https://www.tslang.cn/assets/images/foreground_bluprint.svg
---

对于传统的 JavaScript 程序我们会使用`函数`和`基于原型的继承`来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是`基于类的继承`并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本。

<!-- more -->

## 类 `class`

---

```ts
/*
 * 类的基本定义与使用
 */

class Greeter {
  // 属性声明
  message: string;

  // 构造函数
  constructor(message: string) {
    this.message = message;
  }

  //一般方法
  greet(): string {
    return `Hello ${this.message}`;
  }
}

// 创建类实例
const greeter = new Greeter("world");
// 调用实例方法
console.log(greeter.greet());
```

如果使用过 C# 或 Java，你会对这种语法非常熟悉。 声明一个 `Greeter` 类。这个类有 3 个成员：一个叫做 `message` 的属性，一个`构造函数`和一个 `greet` 方法。

你会注意到，在引用任何一个类成员的时候都用了 `this`。 它表示我们访问的是类的成员。

后面一行，使用 `new `构造了 `Greeter` 类的一个实例。它会调用之前定义的构造函数，创建一个 `Greeter` 类型的新对象，并执行构造函数初始化它。

最后一行通过 `greeter` 对象调用其 `greet` 方法

## 继承 `extends`

---

在 TypeScript 里，可以使用常用的面向对象模式。基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。

```ts
/*
 * 类的继承
 */
class Animal {
  run(distance: number) {
    console.log(`Animal run ${distance}`);
  }
}

class Dog extends Animal {
  cry() {
    console.log("wang~");
  }
}

const dog = new Dog();
dog.cry();
dog.run(100); // 可以调用从父中继承得到的方法
```

这个例子展示了最基本的继承：类从基类中继承了属性和方法。 这里，`Dog` 是一个 派生类，它派生自 `Animal` 基类，通过 `extends` 关键字。 派生类通常被称作子类，基类通常被称作超类。
因为 `Dog` 继承了 `Animal` 的功能，因此我们可以创建一个 `Dog` 的实例，它能够 `cry()` 和 `run()`

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  run(distance: number = 0) {
    console.log(`${this.name} run ${distance}m`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    // 调用父类构造方法
    super(name);
  }

  // 重写父类方法
  run(distance: number = 5) {
    console.log("sliding...");
    // 调用父类型的一般方法
    super.run(distance);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    // 调用父类构造方法
    super(name);
  }

  // 重写父类方法
  run(distance: number = 50) {
    console.log("dashing...");
    // 调用父类型的一般方法
    super.run(distance);
  }

  xxx() {
    console.log("xxx()");
  }
}

const snake = new Snake("sn");
snake.run();

const horse = new Horse("ho");
horse.run();

// 父类型引用指向子类型的实例 ==> 多态
const tom: Animal = new Horse("tom");
tom.run();

// 如果子类没有扩展的方法，可以让子类型引用指向夫类型的实例
const jreey: Snake = new Animal("jreey");
jreey.run();

/* 如果子类型有扩展的方法, 不能让子类型引用指向父类型的实例 */
// Error: Property 'xxx' is missing in type 'Animal' but required in type 'Horse'.
// const tom2: Horse = new Animal('tom2')

// Error: Cannot find name 'tom2'. Did you mean 'tom'?
// tom2.run()
```

这个例子展示了一些上面没有提到的特性。 这一次，我们使用 `extends` 关键字创建了 `Animal` 的两个子类：`Horse` 和 `Snake`。

与前一个例子的不同点是，派生类包含了一个构造函数，它 必须调用 `super()`，它会执行基类的构造函数。 而且，在构造函数里访问 `this` 的属性之前，我们 一定要调用 `super()`。 这个是 TypeScript 强制执行的一条重要规则。

这个例子演示了如何在子类里可以重写父类的方法。`Snake` 类和 `Horse` 类都创建了 `run` 方法，它们重写了从 `Animal` 继承来的 `run` 方法，使得 `run` 方法根据不同的类而具有不同的功能。
注意，即使 `tom` 被声明为 `Animal` 类型，但因为它的值是 `Horse`，调用 tom.run() 时，它会调用 Horse 里重写的方法。

## 公共，私有与受保护的修饰符

---

### 默认为 `public`

上面的例子里，可以自由的访问程序里定义的成员。如果你的其他语言的类比较了解，就会注意到之前的代码里面并没有使用`public`来做修饰；例如, C# 要求必须明确的使用 `public` 指定成员是可见的。在 TypeScript 中，成员都默认为 `public`

可以明确的将一个成员标记成 `public` ,可以用下面的方式重写上面的 `Animal` 类

### 内部私有 `private`

当被标记 `pricate` ，它就不能在声明它的类的外部访问。

### 受保护的 `protected`

`protected` 修饰符与 `private` 修饰符的行为很相似，但有一点不同，`protected`成员在派生类中仍然可以访问。

```ts
/*
 * 访问修饰符：用来描述类内部的属性/方法的可访问性
 * public: 默认值，公开的外部也可以访问
 * private：只能类内部访问
 * protected：类内部和子类可以访问
 */

class Animal {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public run(distance: number = 0) {
    console.log(`${this.name} run ${distance}m`);
  }
}

class Person extends Animal {
  private age: number = 12;
  protected sex: string = "Man";

  run(distance: number = 5) {
    console.log("Person jumping...");
    super.run(distance);
  }
}

class Student extends Person {
  run(distance: number = 6) {
    console.log("Student jumping...");
    console.log(this.sex); // 子类能看到父类中受保护的成员
    // console.log(this.age); // 子类看不到父类中私有的成员

    super.run(distance);
  }
}

console.log(new Person("tom").name); //公开可见的

// Error: Property 'sex' is protected and only accessible within class 'Person' and its subclasses.
// console.log(new Person("tom").sex); // 受保护的不可见

// Error: Property 'age' is private and only accessible within class 'Person'.
// console.log(new Person("tom").age); // 私有不可见
```

## 修饰符 `readonly`

---

使用 `readonly` 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化

```ts
class Person {
  readonly name: string = "tom";

  constructor(name: string) {
    this.name = name;
  }
}
let jerry = new Person("jerry");

// Error: Cannot assign to 'name' because it is a read-only property.
// jerry.name = "tony"; // Error
```

### 参数属性

在上面的例子中，必须在 `Person` 类里定义一个只读成员 `name` 和一个参数为 `name` 的构造函数，并且立刻将 `name` 的值赋给 `this.name`，这种情况经常会遇到。 参数属性可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前 `Person` 类的修改版，使用了参数属性

```ts
class Person2 {
  constructor(readonly name: string) {}
}

const p = new Person2("jack");
console.log(p.name);
```

注意看我们是如何舍弃参数 `name`，仅在构造函数里使用 `readonly name: string` 参数来创建和初始化 `name` 成员。 我们把声明和赋值合并至一处。

参数属性通过给构造函数参数前面添加一个访问限定符来声明。使用 `private` 限定一个参数属性会声明并初始化一个私有成员；对于 `public` 和 `protected` 来说也是一样

## 存取器 `getters/setters`

---

TypeScript 支持通过 `getters/setters`来截取对象成员的访问，它能有效帮助你控制对象成员的访问
下面来看如何把一个简单的类改写成使用 `get` 和 `set`。 首先，我们从一个没有使用存取器的例子开始。

```ts
class Person {
  firstName: string = "A";
  lastName: string = "B";
  get fullName(): string {
    return this.firstName + "-" + this.lastName;
  }
  set fullName(value: string) {
    const names = value.split("-");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const p = new Person();
console.log(p.fullName);

p.firstName = "C";
p.lastName = "D";
console.log(p.fullName);

p.fullName = "E-F";
console.log(p.firstName, p.lastName);
```

## 静态属性 `static`

---

到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 在这个例子里，我们使用 `static` 定义 `origin`，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在 `origin` 前面加上类名。 如同在实例属性上使用 `this.xxx` 来访问属性一样，这里我们使用 `Person.origin` 来访问静态属性。

```ts
/**
 * 静态属性，是类对象的属性
 * 非静态属性，是类实例对象的属性
 */

class Person {
  name: string = "A";
  static origin: string = "B";
}

console.log(Person.origin);
console.log(new Person().name);
```

## 抽象类 `abstract`

---

抽象类做为其它派生类的基类使用。 它们不能被实例化。不同于接口，抽象类可以包含成员的实现细节。 `abstract` 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```ts
/**
 * 抽象类
 * 不能创建实例对象，只有实现类才能创建实例
 * 可以包含未实现的抽象方法
 */

abstract class Animal {
  abstract cry(): void;

  run() {
    console.log("run()");
  }
}

class Tom extends Animal {
  cry() {
    console.log("Tom cry()");
  }
}

const tom = new Tom();
tom.cry();
tom.run();
```
