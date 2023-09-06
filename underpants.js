// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = (value) => {
    //return the given value
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = (value) => {
    //check if the value is a number 
    if (typeof value === 'number') {
        //return a string saying number
        return 'number';
        //check if the value is a string 
    } else if (typeof value === 'string') {
        //return a string saying string
        return 'string';
        //check if the value is a boolean
    } else if (typeof value === 'boolean') {
        //return a string saying boolean
        return 'boolean';
        //check if the value is a undefined    
    } else if (typeof value === 'undefined') {
        //return a string saying undefined
        return 'undefined';
        //check if the value is not defined   
    } else if (!value) {
        //return a string saying null
        return 'null';
        //check if the value is an array    
    } else if (typeof value === 'object' && Array.isArray(value)) {
        //return a string saying array
        return 'array';
        //check if the value is a object     
    } else if (typeof value === 'object' && !Array.isArray(value)) {
        //return a string saying object
        return 'object';
        //check if the value is a function
    } else if (typeof value === 'function') {
        //return a string saying function
        return 'function';
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = (arr, num) => {
    //create an empty array
    var Narr = [];
    //check num is defined and arr is a array
    if (num && Array.isArray(arr)) {
        //check if num is greater than all the values in arr   example:  5 > ['a', 'b', 'c'] = 3 values   so it 5 > 3
        if (num > arr.length) {
            //return Narr
            return arr;
            //run if num is less than arr length  
        } else {
            //loop through arr, using num for how many time need to loop 
            for (let i = 0; i < num; i++) {
                //push the current value into Narr
                Narr.push(arr[i]);
            }
        }
        //check num is defined and arr is not a array  
    } else if (num && !Array.isArray(arr)) {
        //return Narr
        return Narr;
        //run if num is not defined and if arr is a array or not
    } else {
        //return the first value in arr
        return arr[0];
    }
    //return Narr
    return Narr;
}
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = (arr, num) => {
    //create an empty array
    var Narr = [];
    //check num is defined and arr is a array
    if (num && Array.isArray(arr)) {
        //check if num is greater than all the values in arr   example:  5 > ['a', 'b', 'c'] = 3 values   so it 5 > 3
        if (num > arr.length) {
            //return Narr
            return arr;
            //run if num is less than arr length  
        } else {
            //loop backward through arr, using num for how many time need to loop 
            for (let i = num; i > 0; i--) {
                //push the current value into Narr
                Narr.push(arr[i]);  //or use .unshift()
            }
            //reverse the position in the Narr array
            Narr.reverse();
        }
        //check num is defined and arr is not a array
    } else if (num && !Array.isArray(arr)) {
        //return Narr
        return Narr;
        //run if num is not defined and if arr is a array or not
    } else {
        //return the last value in arr
        return arr[arr.length - 1];
    }
    //return Narr
    return Narr;
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = (arr, value) => {
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //check if the current value is equal the given value
        if (arr[i] === value) {
            //return the index of the current value
            return i;
        }
    }
    //return -1
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = (arr, value) => {
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //check if the current value is equal the given value
        if (arr[i] === value) {
            //reutrn true
            return true;
        }
    }
    //return false
    return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = (arrobj, func) => {
    //check if arrobj is an array
    if (Array.isArray(arrobj)) {
        //loop through the arrobj
        for (let i = 0; i < arrobj.length; i++) {
            //run the func with the current value, index, and arrobj
            func(arrobj[i], i, arrobj);
        }
        //run if arrobj is not an array
    } else {
        //loop through the arrobj
        for (let key in arrobj) {
            //run the func with the current value, index, and arrobj
            func(arrobj[key], key, arrobj);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = (arr) => {
    //create an empty array
    var Narr = [];
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //check if the Narr contains doesn't a value that is the same as the current value in arr
        if (_.indexOf(Narr, arr[i]) === -1) {
            //push the current value into Narr
            Narr.push(arr[i]);
        }
    }
    //return Narr
    return Narr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = (arr, func) => {
    //create an empty array
    var Narr = [];
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //check func return true when given the current value, index, and arr
        if (func(arr[i], i, arr)) {
            //push the current value into Narr
            Narr.push(arr[i]);
        }
    }
    //return Narr
    return Narr;
}
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = (arr, func) => {
    //create an empty array
    var Narr = [];
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //check if func return false when given func the current value, index, arr
        if (!func(arr[i], i, arr)) {
            //push the current value into Narr
            Narr.push(arr[i]);
        }
    }
    //return Narr
    return Narr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = (arr, func) => {
    //create three empty array
    var Narr = [];
    var t = [];
    var f = [];
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //check if the func return true when it's given the current value, index, arr
        if (func(arr[i], i, arr)) {
            //push the current value into the array t
            t.push(arr[i]);
            //run if func return false
        } else {
            //push the current value into the array t
            f.push(arr[i])
        }
    }
    //push both array t and f into Narr array
    Narr.push(t);
    Narr.push(f);
    //return Narr
    return Narr;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = (coll, func) => {
    //create an empty array
    var Ncoll = []
    //check if coll is an array
    if (Array.isArray(coll)) {
        //loop through coll
        for (let i = 0; i < coll.length; i++) {
            //push the value from the func when given func the current value in coll, it index position, and the coll it self
            Ncoll.push(func(coll[i], i, coll));
        }
        //run if coll is not an array
    } else {
        //loop through coll
        for (let key in coll) {
            //push the value from the func when given func the current value in coll, it index position, and the coll it self
            Ncoll.push(func(coll[key], key, coll));
        }
    }
    //return Ncoll
    return Ncoll;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = (arr, value) => {
    //return the value that map returns
    return _.map(arr, function (cur, index, array) {
        //check if the current has the same key name as the given value
        if (cur[value]) {
            //return the current key value
            return cur[value];
        }

    })

}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = (coll, func) => {
    //check if the function func is given
    if (!func) {
        //loop through the coll
        for (let i = 0; i < coll.length; i++) {
            //check if there a value that equal true
            if (coll[i] === true) {
                //return true
                return true
                //check if there a value that equal false
            } else if (coll[i] === false) {
                //return false
                return false
            }

        }
    }
    //check if coll is an array
    if (Array.isArray(coll)) {
        //loop through the coll
        for (let i = 0; i < coll.length; i++) {
            //check if func return a false value when it's given the current value, index, and coll
            if (!func(coll[i], i, coll)) {
                //return false
                return false
            }
        }
        // runs if coll is not an array
    } else {
        //loop through the coll
        for (let key in coll) {
            //check if func return a false value when it's given the current value, index, and coll
            if (!func(coll[key], key, coll)) {
                //return false
                return false
            }
        }
    }
    //return true
    return true
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = (coll, func) => {
    //check if the function func is given
    if (!func) {
        //loop through the coll
        for (let i = 0; i < coll.length; i++) {
            //check if there a value that equal true
            if (coll[i] === true) {
                //return true
                return true
                //check if there a value that equal false
            } else if (coll[i] === false) {
                //return false
                return false
            }

        }
    }
    //check if coll is an array
    if (Array.isArray(coll)) {
        //loop through the coll
        for (let i = 0; i < coll.length; i++) {
            //check if func return a true value when it's given the current value, index, and coll
            if (func(coll[i], i, coll)) {
                //return true
                return true
            }
        }
        // runs if coll is not an array
    } else {
        //loop through the coll
        for (let key in coll) {
            //check if func return a true value when it's given the current value, index, and coll
            if (func(coll[key], key, coll)) {
                //return true
                return true
            }
        }
    }
    //return false
    return false
}
/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = (arr, func, seed) => {
    console.log(seed);
    //check if seed is not given and if it not equal to zero
    if (seed === undefined) {
        //set seed to equal the first value in the given array arr
        seed = arr[0];
    }
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //set seed to equal the result of the given function func 
        seed = func(seed, arr[i], i);
    }
    //return seed
    return seed;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = (obj1, obj2, ...objs) => {
    //check if there is a second given object
    if (!obj2) {
        //if only one object is given return that single object
        return obj1
    }
    //loop through all keys in obj2 
    for (let key in obj2) {
        // create a new key with the same name and value of the current key in obj2 
        obj1[key] = obj2[key];
    }
    //check if objs has a object or more
    if (objs) {
        //loop through each object in objs
        for (let i = 0; i < objs.length; i++) {
            //loop through all keys in the current object then 
            for (let key in objs[i]) {
                // create a new key with the same name and value of the current key in the current key
                obj1[key] = objs[i][key];
            }

        }
    }
    //return obj1
    return obj1
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
