const number = document.getElementsByClassName("num");
const operation = document.getElementsByClassName("operation");
const other = document.getElementsByClassName("other");
var result = document.getElementById("resul");
var operator = "";
var number1 , number2;
var inOperation = 0;


for (let i = 0; i < 10; i++) {
    number[i].addEventListener('click', fnumber);
}
for (let i = 0; i < 4; i++) {
    operation[i].addEventListener('click', foperation);
}
for (let i = 0; i < 3; i++) {
    other[i].addEventListener('click', fother);
}

function fresult () {
    switch (operator) {
        case "+":
            r=number1+number2;
            break;
        case "-":
            r=number1-number2;
            break;
        case "*":
            r=number1*number2;
            break;
        case "/":
            r=number1/number2;
            break;
        default:
             break;
    }
    return r;
}

function fnumber () {

        if(result.textContent === '0'){
            result.textContent =  this.textContent;
        }
        else if (inOperation === 1){
            result.textContent =  this.textContent;
            inOperation=0;
        }
        else{
            result.textContent +=  this.textContent;
            }   
}

function foperation () {
    number1= Number(result.textContent);
    operator=this.textContent;
    result.textContent=  this.textContent;
    inOperation =1;
}

function fother () {
    if (this.textContent === '='){
        number2= Number(result.textContent);
        r = fresult();
        result.textContent= r;
        r='';
        number1=0;
        number2=0;
        
    }
    else if (this.textContent === '.' ){
        if (! result.textContent.includes('.')){
            result.textContent += this.textContent;
        }
    }
    else{
        result.textContent = 0;
        number1=0;
        number2=0;
        inOperation=0;
    }
}

