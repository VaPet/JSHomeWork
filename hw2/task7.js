/*
####Задача 7

Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей 
(чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). 
Данная функция должна обязательно содержать проверку входного параметра, потому что 
принимать она может только число больше 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
```
*/

function getDivisors(int) {
    if (typeof int !== "number")
        throw new Error("Неверный тип аргумента")
    else {
        if (int <= 0)
            throw new Error("Неверное значение аргумента")
        else {
            divisors = new Array();
            for (var i = int; i > 0; i--) {
                if (int % i == 0)
                    divisors.push(i)
            }
            return divisors
        }
    }
}

// не критично, если делители идут по убыванию?
console.log(getDivisors(12))