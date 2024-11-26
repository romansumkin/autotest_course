function kolobok(character) {
    switch (character.toLowerCase()) {
        case 'дедушка':
            return 'Я от дедушки ушёл';
        case 'заяц':
            return 'Я от зайца ушёл';
        case 'лиса':
            return 'Меня съели';
        default:
            return 'Неизвестный персонаж';
    }
}

console.log(kolobok('дедушка')); 
console.log(kolobok('лиса'));   
console.log(kolobok('заяц'));   


function newYear(character) {
    if (character === 'Дед Мороз') {
        return `${character}! ${character}! ${character}!`;
    } else if (character === 'Снегурочка') {
        return `${character}! ${character}! ${character}!`;
    } else {
        return 'Неизвестный персонаж';
    }
}

console.log(newYear('Дед Мороз'));    
console.log(newYear('Снегурочка')); 
console.log(newYear('Колобок'));
