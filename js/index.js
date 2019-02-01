//let greetings;                   let  const
//alert(greetings);

// string
// boolean
// number
// null
// undefined
// Object
// Symbol

//let name = prompt'Enter your name';
//let msg = 'Hello' + name;
//alert(msg);

//const age = parseInt(prompt('Enter your age'));
// Зробити змінну, яка буде містити вік + 1
// Вивести результат на екран
//const newAge = age + 1;
//alert('You are ' + checkAge(age));

//function add(a, b, c){
//    const res = a + b + c;
//    return res;
//}

//const total = add(2, 2, 3);
//alert(total);

//function checkAge(age) {
//    if (age <= 18) {
//        return 'child';
//    } else {
//        return 'adult';
//    }
//}


const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));
let x1;
let x2;

const result = solveQuadrEq(a, b, c);
alert(result);

function solveQuadrEq(a, b, c){
    const discr = calcDisc(a, b, c);
    if (discr > 0) {
        x1 = - b + Math.sqrt(discr) / ( 2 * a );
        x2 = - b - Math.sqrt(discr) / ( 2 * a );
    }else {
        if (discr === 0){
            x1 = - ( b / (2 * a));
            x2 = - ( b / (2 * a));
        }else {
            x1 = 'дане рівняння не має дійсних коренів';
            x2 = 'дане рівняння не має дійсних коренів';
        }
    }
    return 'x1 = ' + x1 + ' x2 = ' + x2;
}

function calcDisc(a, b, c){
    return ( b * b ) - ( 4 * a * c );
}
