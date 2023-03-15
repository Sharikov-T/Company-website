function calculator() {
    let ceilings = document.getElementById('calculator-potolok').value;
    let size = Number(document.getElementById('calculator-sizes').value);
    let addedService = document.getElementById('added-service-calc').value;
    let cost = 0;
    switch (ceilings) {
        case 'звёздное':
            cost += 700 * size;
            break;
        case 'пвх':
            cost += 500 * size;
            break;
        case 'тканевый':
            cost += 2750 * size;
            break;
        case 'сатиновый':
            cost += 550 * size;
            break;
        case 'матовый':
            cost += 500 * size;
            break;
        case 'цветной':
            cost += 800 * size;
            break;
        case 'глянцевый':
            cost += 600 * size;
            break;
        case 'подсветка':
            cost += 1100 * size;
            break;
    }
    switch (addedService) {
        case 'люстра':
            cost += 700 * Number(document.getElementById('lustra-calc__quanity').value);
        case 'карниз':
            cost += 400 * Number(document.getElementById('carniz-calc__quanity').value);
        case 'демонтаж':
            cost += 40 * Number(document.getElementById('demontazh-calc__quanity').value);
        case 'брус':
            cost += 700 * Number(document.getElementById('brus-calc__quanity').value);
        case 'угол':
            cost += 200 * Number(document.getElementById('ugol-calc__quanity').value);
        case 'кривой_участок':
            cost += 500 * Number(document.getElementById('criv-uchastock-calc__quanity').value);
        case 'поверхность':
            cost += 300 * Number(document.getElementById('poverhnost-calc__quanity').value);
        case 'проводка':
            cost += 150 * Number(document.getElementById('provodka-calc__quanity').value);
        case 'труба':
            cost += 200 * Number(document.getElementById('truba-calc__quanity').value);
    }
    document.getElementById('priceCalc').innerHTML = `${cost} руб.`;
}