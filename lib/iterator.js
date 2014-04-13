//iterator examples
function Iterator(obj) {
    
    //current element
    this.current = 0; 
    //an array
    this.collection = [];  
    
    if (obj.length === undefined && typeof obj !== 'object' ) {
   
    } else {
        //build and index the collection 
        for(var key in obj) {
            var item = {};
            item[key] = obj[key]; 
            this.collection.push(item);
           
        }
    }
}

//add the iteration methods.
Iterator.prototype.count = function() {
    return this.collection.length; 
}
Iterator.prototype.getNext = function() {
    if ((this.current) == (this.count())) {
        return null; 
    } else {
        this.current++; 
        return this.collection[this.current-1]; 
    }
}
Iterator.prototype.hasNext = function() {
    if ((this.current) < (this.count())) {
        return true; 
    } else {
        return false; 
    }
}




module.exports = Iterator; 
/*
var testArr = [];
testArr['one'] = 4;
testArr['two'] = 28;

var testObj = {};
testObj['one'] = 5;
testObj['two'] = 28;

console.log(testObj.length); 
foreach(testObj, callback);
*/