var f = function(x) {
    // проверка на тип
    if (typeof x === "number")
        return Math.pow(x, 3);
    // в противном случае выбрасываем исключение
    else
        throw new "Указан неверный тип!";
}

console.log(f(3));
console.log(f(true));