const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

const result = solveQuadrEq(a, b, c);
alert(result);

function solveQuadrEq(a, b, c){
    const discr = calcDisc(a, b, c);
    if (discr > 0) {
        x1 = (-b + Math.sqrt(discr)) / ( 2 * a );
        x2 = (-b - Math.sqrt(discr)) / ( 2 * a );
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
