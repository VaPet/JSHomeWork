/*
#### Задача 14

Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления 
не станет меньше 50. Какое число получится? 
Посчитайте количество итераций, необходимых для 
этого (итерация - это проход цикла), и запишите его в переменную `num`.
*/

var i = 0;
var n = 1000; 

while (n >= 50) {
    n /= 2;
    i++;
}

console.log(i);