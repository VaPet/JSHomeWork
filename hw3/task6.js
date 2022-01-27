/*
####Задача 6

Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```
*/
const arr = [1, 2, 3];
const acc = 0;

function reduceRight(array, f, value) {
    if (!Array.isArray(array) && typeof f !== 'function' &&
        typeof value !== 'number' && typeof value !== 'string') {
            throw new Error("Неверный аргумент функции!");
        } else {
            let result = value;
            for (i = array.length-1; i >=0; i--) {
                result = f.call(null, result, arr[i], i, arr);
            }
        return result;
    }
}

console.log(reduceRight(arr, function(acc, value, i, array) {
    return acc + value;
}, acc));