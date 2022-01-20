/*
###Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. 
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
*/

function f(int) {
    if (int < 1 || i > 7) 
        throw new Error("Неверное значение аргументов функции")
    else if (typeof int !== "number")
        throw new Error("Неверный тип аргументов функции")
    else {
        var  day
        switch (int) {
            case 1:
                day = "Воскресенье"
                break
            case 2:
                day = "Понедельник"
                break
            case 3:
                day = "Вторник"
                break
            case 4:
                day = "Среда"
                break
            case 5:
                day = "Четверг"
                break
            case 6:
                day = "Пятница"
                break
            case 7:
                day = "Суббота"
                break
            }
        return day
    }
}

for (var i = 1; i <= 7; i++)
    console.log(f(i))