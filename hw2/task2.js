/*
####Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. 
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
*/

function f(...args) {
    var sum = 0;
    for (var i = 0; i < args.length; i++)
        if (typeof args[i] !== "number")
            throw new Error("Неверный тип аргументов функции")
        else {
            sum += args[i]
        }
        return sum
}

console.log(f(2, 5, 7))