/*
#### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

var arr = [1, 2, 3, 4, 5, 6];

var i = 0;
var j = arr.length - 1;
var tmp;

while (j > i) {
    tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
    j--;
    i++;
    }

console.log(arr);

