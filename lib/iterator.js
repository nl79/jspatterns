//iterator examples
function foreach(obj, callback) {
    if (obj.length === undefined && typeof obj !== 'object' ) {
        return null; 
    }
   for(var key in obj) {
    callback(key, obj[key])
    
   }
}

function callback(key, value) {
    console.log(key + " " +value); 
}


var testArr = [];
testArr['one'] = 4;
testArr['two'] = 28;

var testObj = {};
testObj['one'] = 5;
testObj['two'] = 28;

console.log(testObj.length); 
foreach(testObj, callback); 