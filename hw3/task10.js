/*
###Задача 10

Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```
*/ 
const arr = [3, 2, 1];
function reverse(array) {
    if (!Array.isArray(array)) {
        throw new Error("Неверный параметр функции");
    } else {
        if (array.length == 0) {
            throw new Error("Передай пустой массив")
        } else {
            let arr = new Array();
            while (array.length > 0) {
                arr.push(array.pop());
            }
            return arr;
        }
    }
}

console.log(reverse(arr));