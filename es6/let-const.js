/**
 * Created by raghu on 1/28/2017.
 */
/*
* let and const are scoped variables
* let and const are not hoisted to top of their enclosing scope
* Referencing blocked scope before defining them will cause "ReferenceError"
*
* */

/*console.log(a);
var a = "123";
console.log(b);
let b="123";*/
/*
Sample Output
 undefined
 let-const.js:13 Uncaught ReferenceError: b is not defined
 at let-const.js:13
 */


var c = "text";
let c1 = "text1";
function get(opt) {
    if (opt) {
        var c = "new";
        return c;
    }
    return c;
}

function get1(opt) {
    if (opt) {
        let c1 = "new1";
        return c1;
    }
    return c1;
}

console.log(get(false));
console.log(get1(false));

/*
* sample output
 undefined
 text1
* */

