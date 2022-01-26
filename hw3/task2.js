/*
####Задача 2

Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
*/

function filter(arr, f) {
    if (!Array.isArray(arr) && typeof f !== 'function') {
        throw new Error("Неверный аргумент функции!");
    } else {
        let a = new Array();
        for (i in arr) {
            if (f(arr[i])) {
                a.push(arr[i]);
            }
        }
        return a;
    }
}

const arr = [1, 2, 3];
console.log(filter(arr, x => x % 2 == 0));