/**
 * Created by raghu on 2/7/2017.
 */

var createFunction = function (message, name) {
    return message + name;
};

let arrowFunction = (message, name) => {
    return message+name;
};

// If we have one line with in the function then we can remove the curly braces and return keyword, and the whole funtion should be in one line
let arrowFunction1 = (message, name) => message+name;

// If we are passing one parameter to the function then we can remove the ()
let arrowFunction2 = message => message + ", Raghu";

console.log(createFunction("This is Normal Function ", "Raghu"));
console.log(arrowFunction("This is Arrow Function with braces and return keyword ", "Raghu"));
console.log(arrowFunction1("This is Arrow Function without braces and return keyword ", "Raghu"));
console.log(arrowFunction2("Hello"));

// to get the parent scope in the child scope we have to assign the parent scope to one variable and then using that we can access parent scope
var deliveryBoy = {
    name: "Raghu",
    printMessage: function (message, print) {
        print(message);
    },

    receiveMessage: function () {
      var that = this; // assigning parent scope to local variable in child scope
      this.printMessage("Your delivery is here through regular function ", function (message) {
          console.log(message+ that.name);
      })
    }
};
deliveryBoy.receiveMessage();

let deliveryBoy1 = {
    name: "Raghu",

    printMessage: (message, print) => print(message),

    /*receiveMessage: function () {
        this.printMessage("Your delivery is here through arrow function ", message => console.log(message+ this.name));
    }*/
    receiveMessage: () => this.printMessage("Your delivery is here through arrow function ", message => console.log(message+ this.name))
};

deliveryBoy1.receiveMessage();