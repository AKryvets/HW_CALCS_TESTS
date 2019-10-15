let memoryNumber = 0;
let countNumber = 0;
let check = true;
let isPointOn = true;
let isNegative = false;
let ressultFlag = true;
let flag = '';
let dubBtn = document.getElementById('dub');
let display = document.getElementById('talo');
let plusBtn = document.getElementById('plusBtn');
let minusBtn = document.getElementById('minusBtn');
let divideBtn = document.getElementById('divideBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let clearBtn = document.getElementById('del');
let ressultBtn = document.getElementById('equally');
let allBtns = document.querySelectorAll('.btn,.bigbuttonend_n');


for (let i = 0; i < allBtns.length; i++) {
    let btn = allBtns[i];
    btn.addEventListener('click', function (e) {
        clickNumber(e.target.textContent);
        console.log(e.target.textContent);
    });

}
let clickNumber = num => {
    if (check) {
        if(+display.value == 0 && num == 0)//////////////
            return 'false';//////////////////////

        display.value = num;
        check = false;
    } else {
        display.value += num;
        cutDisplay(display.value);
    }
}

dubBtn.addEventListener('click', function () {
    for (let i = 0; i < display.value.length; i++) {
        if (display.value[i] === '.') {
            return;
        }
    }
    display.value += '.';
    check = false;
});
plusBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '+';
    check = true;
    isNegative = false;
    ressultFlag = true;
    console.log("+");
});
minusBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '-';
    check = true;
    ressultFlag = true;
    console.log("-");
});
divideBtn.addEventListener('click', function () {
    lastOperation();
    if (memoryNumber === 0 && display.value === '0') {

        display.value = '0';
    }
    if (isNaN(display.value) || isNaN(memoryNumber)) {

        display.value = '0';
    }
    memoryNumber = +display.value;
    flag = '/';
    check = true;
    ressultFlag = true;
    console.log("/");
});
multiplyBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '*';
    check = true;
    ressultFlag = true;
    console.log("*");
});
clearBtn.addEventListener('click', function () {
    display.value = 0;
    memoryNumber = 0;
    flag = '';
    check = true;
    ressultFlag = true;
    console.log("Clear");
})

function Summ(a, b) {
    if(typeof a != "number" || typeof b != "number")
        return 'false';
    a += b;
    let c = parseInt(a);
            console.log(c);
     if(c > 999999999 || isNaN(a)){
        display.value = "Error";
        return "false";
    }
     let local = String(a); 
        a = cutDisplay(local);
        a = parseFloat(a);
    return a
}

function minus(a, b) {
     if(typeof a != "number" || typeof b != "number")
        return 'false';
    a -= b;
    let c = parseInt(a);
            console.log(c);
      if(c > 999999999 || isNaN(a)){
        display.value = "Error";
        return "false";
    }
        let local = String(a); 
        a = cutDisplay(local);
        a = parseFloat(a);
    return a
}

function divide(a, b) {
    if(typeof a == "number" && typeof b == "number"){
    if(a == 0 || b == 0 ){
        console.log('dnul00000  ' + a + "  " + b);
        return 0;
    }


    a /= b;
    let c = parseInt(a);
            console.log(c);
      if(c > 999999999 || isNaN(a)){
        display.value = "Error";
        return "false";
    }
        let local = String(a); 
        a = cutDisplay(local);
        a = parseFloat(a);
    return a
}
else{
    return 'false';
}
}

function multiply(a, b) {
    if(typeof a != "number" || typeof b != "number")
        return 'false';
    a *= b;
    let c = parseInt(a);
            console.log(c);
    if(c > 999999999 || isNaN(a)){
        display.value = "Error";
        return "false";
    }
        let local = String(a); 
        a = cutDisplay(local);
        a = parseFloat(a);
    return a
}

ressultBtn.addEventListener('click', function () {
    if (ressultFlag) {
        countNumber = +display.value;
    
    switch (flag) {
        case '+':
            memoryNumber = Summ(memoryNumber, countNumber);
            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
        case '-':
            memoryNumber = minus(memoryNumber, countNumber);
            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
         case '/':
                memoryNumber = divide(memoryNumber, countNumber);
            

            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
        case '*':
            memoryNumber = multiply(memoryNumber, countNumber);
            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
    }
        if(memoryNumber == "false")
        {
            return 0;
             memoryNumber = 0;
    countNumber = 0;
    flag = '';
        }

    display.value = memoryNumber;
    cutDisplay(display.value);
    memoryNumber = 0;
    countNumber = 0;
    flag = '';
}
});

function cutDisplay(a) {
    if(a == null)
        return 'false';
    if (a.length > 9) {
        a = a.slice(0, 9);
    }
    display.value = a;
    return a;
}

function lastOperation() {
    switch (flag) {
        case '+' :
            if (check) {

                memoryNumber = display.value;
            } else {
                memoryNumber = Summ(memoryNumber, Number(display.value));
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '-' :
            if (check) {
                memoryNumber = display.value;
            } else {
                memoryNumber = minus(memoryNumber, Number(display.value));
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '/' :
            if (check) {
                memoryNumber = display.value;
            } else {
                memoryNumber = divide(memoryNumber, Number(display.value));
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '*' :
            if (check) {
                memoryNumber = display.value;
            } else {
                memoryNumber = multiply(memoryNumber, Number(display.value));
            }
             if(memoryNumber == "false")
        {
            return 0;
        }


            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
    }
}

