document.write(typeof "word"); 
document.write("<br>");
document.write(-3E310); 
document.write("<br>");
document.write(2E310);
document.write("<br>");
document.write(10 > 2);
document.write("<br>");
document.write(10 < 2);
document.write("<br>");
console.log(2 + 2);
document.write("10" + 5);
document.write("<br>");
document.write(10 == 10);
document.write("<br>");
document.write(3 == 11);
document.write("<br>");
X = 10;
Y = 10;
document.write(X === Y);
document.write("<br>");
X = 82;
Y = "82";
document.write(X === Y);
document.write("<br>"); 
A = "Magnus";
B = "Magnus";
document.write(A === B);
document.write("<br>");
document.write(5 > 2 && 10 > 4);
document.write("<br>");
document.write(5 > 10 && 10 > 4);
document.write("<br>");
function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}
document.write("<br>");
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 20);
}