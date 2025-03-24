function addData(num) {



    var datacal = document.getElementById('calculator_display').innerHTML;
    var lastchar = datacal.slice(-1);


    if ((lastchar == '+' || lastchar == '-') && (num == '*' || num == ' /' || num == '+' || num == '-')) {
        document.getElementById('calculator_display').innerHTML = datacal.slice(0, -1) + num;
    }

    else if (lastchar == '*' && (num== '/' || num == '*')){
        document.getElementById('calculator_display').innerHTML = datacal.slice(0, -1) + num;
    }
    else if (lastchar == '/' && (num== '/' || num == '*')){
        document.getElementById('calculator_display').innerHTML = datacal.slice(0, -1) + num;
    }

    else if (datacal.includes('.') == true && num == '.'){
        document.getElementById('calculator_display').innerHTML = datacal;
    }

    else if (datacal == '0')
        document.getElementById('calculator_display').innerHTML = num;

    else
        document.getElementById('calculator_display').innerHTML += num;

}



function allclear() {
    document.getElementById('calculator_display').innerHTML = 0;
}

function calculate() {
    var datacal = document.getElementById('calculator_display').innerHTML = eval(document.getElementById('calculator_display').innerHTML);
}

function contentload(){
    document.getElementById('calculator_display').contentEditable = true
}

function backspace(){
    
    var datacal = document.getElementById('calculator_display').innerHTML;

    document.getElementById('calculator_display').innerHTML = datacal.slice(0, -1);
}