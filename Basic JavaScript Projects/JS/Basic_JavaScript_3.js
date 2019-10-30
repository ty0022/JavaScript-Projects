function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition ;
}

function subtraction_Function() {
    var subtraction = 3 - 2;
    document.getElementById("Math").innerHTML = "3 - 2 =" + subtraction ;
}

function multiplication() {
    var simple_Math = 4 * 2;
    document.getElementById("Math").innerHTML = "4 x 2 =" + simple_Math ;
}

function division() {
    var simple_Math = 8 / 2;
    document.getElementById("Math").innerHTML = "8 / 2 =" + simple_Math ;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "(1 + 2) * 10 / 2 -5 =" + simple_Math
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Math
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var x = 5;
x++;
document.write(x);

window.alert(Math.random() * 100);