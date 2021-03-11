---
title: TypeScript 泛型
date: 2019-01-29 11:07:22
tags: TypeScript
categories: TypeScript
keywords: ts,typescript,TypeScript
banner: https://www.tslang.cn/assets/images/foreground_bluprint.svg
---

指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。

<!-- more -->

# 泛型 `Generics`

## 引入

---

下面创建一个函数, 实现功能: 根据指定的数量 count 和数据 value , 创建一个包含 count 个 value 的数组 不用泛型的话，这个函数可能是下面这样

```ts
function createArray(value: any, count: number): any[] {
  let arr: any[] = [];
  for (let i = 0; i <= count; i++) {
    arr.push(value);
  }
  return arr;
}

console.log(createArray("aa", 2));
console.log(createArray(2, 2));
```

## 使用泛型

---

不一定非得用 `T`

```ts
function createArray2<T>(value: T, count: number): T[] {
  let arr: Array<T> = [];
  for (let i = 0; i <= count; i++) {
    arr.push(value);
  }
  return arr;
}

console.log(createArray("aa", 2));
console.log(createArray(2, 2));
```

## 多个泛型参数的函数

---

一个函数可以定义多个泛型参数

```ts
function swap<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

const res = swap<string, number>("tom", 12);
console.log(res);
```

## 泛型接口

---

在定义接口时, 为接口中的属性或方法定义泛型类型
在使用接口时, 再指定具体的泛型类型

```ts
interface IbaseCRUD<T> {
  data: T[];
  add: (t: T) => void;
  getById: (id: number) => T;
}

class User {
  id?: number;
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class UserCRUD implements IbaseCRUD<User> {
  data: User[] = [];

  add(user: User): void {
    user = { ...User, id: Date.now() };
    this.data.push(user);
    console.log("save user", user.id);
  }

  getById(id: number): User {
    return this.data.find((i) => i.id === id);
  }
}

const userCRUD = new UserCRUD();
userCRUD.add(new User("tom", 12));
userCRUD.add(new User("tom2", 13));
console.log(userCRUD.data);
```

## 泛型类

---

在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

let myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "abc";
myGenericString.add = function (x, y) {
  return x + y;
};

console.log(myGenericString.add(myGenericString.zeroValue, "test"));
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12));
```

## 泛型约束

---

如果我们直接对一个泛型参数取 `length` 属性, 会报错, 因为这个泛型根本就不知道它有这个属性

```ts
// 没有泛型约束
function fn<T>(x: T): void {
  // Error: Property 'length' does not exist on type 'T'.
  //   console.log(x.length);
}

//添加泛型约束实现
interface Lengthwise {
  length: number;
}

function fn2<T extends Lengthwise>(x: T): void {
  console.log(x.length);
}

fn("12");

// Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
// fn(12)
```
