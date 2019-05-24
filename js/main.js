window.addEventListener('DOMContentLoaded', function() { //проверяем загрузку страницы
    'use strict';

    const btn = document.getElementById('btn'); // находим кнопку 

    btn.addEventListener('click', function() {  // при клике на кнопку запускаем событие
        const a = +document.getElementById('a').value; // получаем значения чисел
        const b = +document.getElementById('b').value; // и меняем тип на number
        let c = 0; // это будет результатом

        c = a + b; // складываем

        if(isNaN(c)) { // проверяем на значение NaN, если юзер введет буквы
            alert('Ошибка ввода'); 
        } else if(a == 0 && b == 0) { // проверяем введено ли что-нибудь
            alert('Введите значения');
        } else {
            let result = c.toFixed(10); // округляю до 10 нулей дабы избежать ошибки в вычислениях
            result = +result; // полученное число строкой, превращяем в числовое
            alert(`Результат \n\n ${result.toPrecision()}`); // выводим наш результат, убрав лишние нули
        }
    });
});
