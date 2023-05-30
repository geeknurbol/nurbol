var day = parseInt(window.prompt('Введите день рождения'));
var month = parseInt(window.prompt('Введите месяц рождения'));

/* && */
switch (month) {
    case 1:
        if (day <= 19)
            znak = 'Козерог';
        else
            znak = 'Водолей';
        break;
    case 2:
        if (day <= 18)
            znak = 'Водолей';
        else
            znak = 'Рыбы';
        break;
    case 3:
        if (day <= 20)
            znak = 'Рыбы';
        else
            znak = 'Овен';
        break;
    case 4:
        if (day <= 19)
            znak = 'Овен';
        else
            znak = 'Телец';
        break;
    case 5:
        if (day <= 20)
            znak = 'Телец';
        else
            znak = 'Близнецы';
        break;
    case 6:
        if (day <= 21)
            znak = 'Близнецы';
        else
            znak = 'Рак';
        break;
    case 7:
        if (day <= 22)
            znak = 'Рак';
        else
            znak = 'Лев';
        break;
    case 8:
        if (day <= 22)
            znak = 'Лев';
        else
            znak = 'Дева';
        break;
    case 9:
        if (day <= 22)
            znak = 'Дева';
        else
            znak = 'Весы';
        break;
    case 10:
        if (day <= 22)
            znak = 'Весы';
        else
            znak = 'Скорпион';
        break;
    case 11:
        if (day <= 22)
            znak = 'Скорпион';
        else
            znak = 'Стрелец';
        break;
    case 12:
        if (day <= 21)
            znak = 'Стрелец';
        else
            znak = 'Козерог';
        break;
}
window.alert('Знак зодиака: ' + znak);




