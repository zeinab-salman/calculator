
var operator = '';
var x0 = '';
var y0 = '';
var result = 0;
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const number = event.target.innerHTML;
        console.log(number);
        if (operator == '') {
            x0 += number;
            console.log(x0)
            textNum1.innerHTML = x0;
            return x0;
        }
        else {
            y0 += number;
            console.log(y0);
            textNum2.innerHTML = y0;
        }
    })
})
const spanPoint = document.querySelector('.span19');
const spanAc = document.querySelector('.spanAc')
const div = document.querySelector('.btn-opr4');
const multiple = document.querySelector('.btn-opr1');
const minus = document.querySelector('.btn-opr2');
const plus = document.querySelector('.btn-opr3');
const mod = document.querySelector('.btn-opr5');
const btnResult = document.querySelector('.btn-result');
const spanResult = document.querySelector('.result');
const btnAc = document.querySelector('.btn-Ac');
const btnLg = document.querySelector('.btn-lg');
const btnLn = document.querySelector('.btn-ln');
const btnSin = document.querySelector('.btn-sin');
const btnCos = document.querySelector('.btn-cos');
const btnRoot = document.querySelector('.btn-root');
const textNum1 = document.querySelector('.text-num-1');
const textNum2 = document.querySelector('.text-num-2');
const textopr = document.querySelector('.opr');
const btnMoon = document.querySelector('.btn-moon');
btnResult.addEventListener('click', function () {
    spanResult.innerHTML = result;
    console.log(result);
})

div.addEventListener('click', function () {
    operator = '÷';
    textopr.innerHTML = operator;
})
multiple.addEventListener('click', function () {
    operator = '*';
    textopr.innerHTML = operator;
})
minus.addEventListener('click', function () {
    operator = '-';
    textopr.innerHTML = operator;
})
plus.addEventListener('click', function () {
    operator = '+';
    textopr.innerHTML = operator;
})
mod.addEventListener('click', function () {
    operator = '%';
    textopr.innerHTML = operator;
})
btnAc.addEventListener('click', function () {
    /*location.reload();*/
    textopr.innerHTML = '';
    operator = '';
    spanResult.innerHTML = '';
    textNum1.innerHTML = '';
    textNum2.innerHTML = '';
    x0 = '';
    y0 = '';
})
btnLg.addEventListener('click', function () {
    operator = 'lg';
    textopr.innerHTML = operator + '(';
})
btnLn.addEventListener('click', function () {
    operator = 'ln';
    textopr.innerHTML = operator + '(';
})
btnSin.addEventListener('click', function () {
    operator = 'sin';
    textopr.innerHTML = operator + '(';
})
btnCos.addEventListener('click', function () {
    operator = 'cos';
    textopr.innerHTML = operator + '(';
})
btnRoot.addEventListener('click', function () {
    operator = 'root';
    textopr.innerHTML = operator + '(';
})
btnMoon.addEventListener('click', function () {
    operator = '^';
    textopr.innerHTML = operator;
})
btnResult.addEventListener('click', function (event) {
    var inputNumber1 = Number(x0);
    var inputNumber2 = Number(y0);
    console.log(inputNumber1);
    console.log(inputNumber2);
    if (operator == '*') {
        result = inputNumber1 * inputNumber2;
        spanResult.innerHTML = result;
    }
    else if (operator == '-') {
        result = inputNumber1 - inputNumber2;
        spanResult.innerHTML = result;
    }
    else if (operator == '+') {
        result = inputNumber1 + inputNumber2;
        spanResult.innerHTML = result;
    }
    else if (operator == '÷') {
        result = inputNumber1 / inputNumber2;
        spanResult.innerHTML = result;
    }
    else if (operator == '%') {
        result = inputNumber1 % inputNumber2;
        spanResult.innerHTML = result;
    }
    else if (operator == 'lg') {
        result = Math.log10(inputNumber2);
        spanResult.innerHTML = result;
    }
    else if (operator == 'ln') {
        result = Math.log(inputNumber2);
        spanResult.innerHTML = result;
    }
    else if (operator == 'sin') {
        result = Math.sin(inputNumber2);
        spanResult.innerHTML = result
    }
    else if (operator == 'cos') {
        result = Math.cos(inputNumber2);
        spanResult.innerHTML = result
    }
    else if (operator == 'root') {
        result = Math.sqrt(inputNumber2);
        spanResult.innerHTML = result
    }
    else if (operator == '^') {
        result = Math.pow(inputNumber1, inputNumber2);
        spanResult.innerHTML = result;

    }
    else {
        spanResult.innerHTML = 'No Result';
    }
    console.log(result);
})
