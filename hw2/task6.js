/*
####Задача 6

Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет. 
Если чётное — функция возвращает `true`, если нечётное — `false`. Данная функция должна 
обязательно содержать проверку входного параметра, потому что принимать она может только число.

*Чётные числа могут делится на 2 без остатка.*

```js
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number
```
*/

function isEven(int) {
    if (typeof int !== "number")
        throw new Error("Неверный тип аргумента функции")
    else {
        var isEven = (int % 2 == 0) ? true : false
        return isEven
    }
}

console.log(isEven(2))
console.log(isEven(3))

