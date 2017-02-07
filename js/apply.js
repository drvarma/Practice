/*
 http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/

apply, call (ES3) and bind (ES5)
all 3 of them passes 'this' as the first parameter
bind to pass the parent scope to child scope


We can borrow functions with call apply and bind


*/

// Borrow function with call
var arrayLikeObj = {0:"raghu", 1:22, 2:46, 3: ["raghu","varma","dantuluri"]};

var newArray = Array.prototype.slice.call(arrayLikeObj,0);
console.log(newArray);