/*
####Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
*/
function every(arr, f) {
    if (!Array.isArray(arr) && typeof f !== 'function') {
        throw new Error("Неверный аргумент функции");
    } else {
        let counter = 0;
        for (i of arr) {
            if (f(i)) {
                counter++;
            }
        }
        if (counter == arr.length) {
            return true;
        } else {
            return false;
        }
    }
}
const arr = [1, 2, 3];

console.log(every(arr, x => x > 0)); // true
console.log(every(arr, x => typeof x === 'number')); // true
console.log(every(arr, x => x < 2)); // false