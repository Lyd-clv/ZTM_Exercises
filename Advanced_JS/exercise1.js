
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;         
    if(a > 1) {        
        a = 3;         
    }
    alert(a);          // 3
}
// - Der Scope von var ist funktional, nicht blockbasiert.
// - Deshalb bleibt a im ganzen Funktionsblock dieselbe Variable.
// - Änderungen innerhalb von if, for, etc. beeinflussen a direkt.


//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);       // 5
}
// a = 5; in q2() überschreibt die globale Variable, weil keine neue var a deklariert wurde.
// alert(a) in q22() greift auf diese globale Variable zu.



//#3
// you must first run q3() in your console to add the a property to the window. then run q32()
function q3() {
    window.a = "hello";
}

function q32() {
    alert(a); // "hello"
}



//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a); // "test"
}



//#5 with var keyword, if statements do not create a new scope
var a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 5 --> Warum? Weil var keinen Block-Scope (Block-Gültigkeit) hat, sondern funktionalen Scope. Das bedeutet:
          // var-Variablen sind innerhalb der gesamten Funktion sichtbar, nicht nur innerhalb von {}-Blöcken wie if, for usw.