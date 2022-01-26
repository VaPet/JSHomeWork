/*
####Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
*/

const arr = [1, 2, 3];

function some(arr, callback) {
    if (!Array.isArray(arr) && typeof callback !== 'function') {
        throw new Error("Неверный аргумент функции!");
    } else {
        let result = false;
        for (i of arr) {
            if (callback(i)) {
                result = true;
            }
        }
        return result;
    }
}

console.log(some([0, 2, 4], x => x < -2)); // false
console.log(some(arr, x => x == 1)); // true
