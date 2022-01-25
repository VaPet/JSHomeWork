/*
####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/

function f(x) {
    console.log(`Это ${x}`);
}
let arr = [1, 2, 3];

function forEach(array, f) {
    if (!Array.isArray(array) || (!f instanceof Function)) {
        throw new Error("Неверный аргумент функции");
    }
    else {
       for (i of arr) {
           f(i);
       }
    }
}

forEach(arr, f);
