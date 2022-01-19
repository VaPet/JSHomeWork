/*
####Задача 1

Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
*/

var f = function(x) {
    // проверка на тип
    if (typeof x === "number")
        return Math.pow(x, 3);
    // в противном случае выбрасываем исключение
    else
        throw new "Указан неверный тип!";
}

console.log(f(3));
console.log(f(true));